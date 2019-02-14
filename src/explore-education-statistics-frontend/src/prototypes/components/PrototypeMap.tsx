import React, {
  ChangeEvent,
  Component,
  FormEvent,
  ReactEventHandler,
} from 'react';

import 'leaflet/dist/leaflet.css';

import styles from './PrototypeMap.module.scss';

import { Feature, FeatureCollection } from 'geojson';

import { LatLngBounds, Path } from 'leaflet';
import { GeoJSON, Map } from 'react-leaflet';

export interface PrototypeMapProps {
  Boundaries: FeatureCollection;
  OnFeatureSelect?: any;
  map: (map: PrototypeMap) => void;
  selectedAuthorities: string[];
}

interface PrototypeMapState {
  selectedAuthorities: string[];
  selectedFeatures: Feature[];
}

class PrototypeMap extends Component<PrototypeMapProps, PrototypeMapState> {
  private mapNode: any;

  private static DEFAULT_BOUNDS = new LatLngBounds(
    { lat: 48, lng: -6.5 },
    { lat: 60, lng: 2 },
  );

  public static defaultProps: Partial<PrototypeMapProps> = {
    OnFeatureSelect: undefined,
    selectedAuthorities: [],
  };

  private data: FeatureCollection;
  private OnFeatureSelect: any | undefined;

  private geoRef: any;

  constructor(props: PrototypeMapProps) {
    super(props);

    if (props.map) props.map(this);

    this.state = {
      selectedAuthorities: props.selectedAuthorities || [],
      selectedFeatures: [],
    };

    /**
     * lad17cd - code
     * lad17nm - name
     */

    this.data = {
      ...props.Boundaries,
      features: props.Boundaries.features.map(g => {
        if (g.properties) {
          g.properties.selectable = g.properties.lad17cd[0] === 'E';
        }

        return g;
      }),
    } as FeatureCollection;

    this.OnFeatureSelect = this.props.OnFeatureSelect;
  }

  public refresh() {
    this.mapNode.leafletElement.invalidateSize();
  }

  private onEachFeature = (feature: Feature, layer: Path) => {
    if (feature.properties && feature.properties.selectable) {
      const featureIndex = this.data.features.findIndex(f => f === feature);

      // @ts-ignore
      this.data.features[featureIndex].properties.layer = layer;

      // @ts-ignore
      layer.bindTooltip(
        `${feature.properties.lad17nm}<br /> overall absence ${
          feature.properties.absence.overall
        }%`,
        {
          // className: f.properties.toolTipClass,
          direction: 'auto',
          opacity: 1.0,
          sticky: true,
        },
      );

      layer.setStyle({ weight: 1, opacity: 1.0 });
    }
  };

  private updateSelectedFeatures(selectedFeatures: Feature[]) {
    this.state.selectedFeatures.forEach(f => {
      // @ts-ignore
      f.properties.layer.getElement().classList.remove(styles.selected);
    });

    selectedFeatures.forEach(f => {
      // @ts-ignore
      f.properties.layer.getElement().classList.add(styles.selected);
    });

    const selectedAuthorities = selectedFeatures.map(f => {
      // @ts-ignore
      return f.properties.lad17nm;
    });

    // TODO: create bounds for all the select elements
    // this.mapNode.leafletElement.fitBounds(selectedLayer.getBounds(), {
    // padding: [200, 200],
    // });
    // selectedLayer.bringToFront();

    this.setState({
      selectedAuthorities,
      selectedFeatures,
    });
  }

  private updateFeatures(selectedFeatures: Feature[]) {
    if (this.OnFeatureSelect) {
      // @ts-ignore
      this.OnFeatureSelect(selectedFeatures.map(f => f.properties));
    }

    this.updateSelectedFeatures(selectedFeatures);
  }

  private toggleFeature = (feature?: Feature) => {
    let selectedFeatures = [...this.state.selectedFeatures];

    // @ts-ignore
    if (feature && feature.properties.selectable) {
      const idx = selectedFeatures.indexOf(feature);

      if (idx === -1) {
        selectedFeatures = [...selectedFeatures, feature];
      } else {
        selectedFeatures.splice(idx, 1);
      }
    }
    this.updateFeatures(selectedFeatures);
  };

  // @ts-ignore
  private click = (e: any) => {
    if (e.sourceTarget.feature) {
      this.toggleFeature(e.sourceTarget.feature);
    }
  };

  private styleFeature = (f: any) => {
    return { className: f.properties && f.properties.className };
  };

  public componentDidMount() {
    // force a refresh to fix a bug
    requestAnimationFrame(() => this.refresh());
  }

  public componentDidUpdate(
    prevProps: Readonly<PrototypeMapProps>,
    prevState: Readonly<PrototypeMapState>,
    snapshot?: any,
  ): void {
    if (
      prevProps.selectedAuthorities.join(',') !==
      this.props.selectedAuthorities.join(',')
    ) {
      const features = this.data.features.filter(
        // @ts-ignore
        f => this.props.selectedAuthorities.includes(f.properties.lad17nm),
      );

      this.updateFeatures(features);
    }
  }

  public render() {
    const position = {
      lat: 53.009865,
      lng: -3.2524038,
    };

    return (
      <div>
        <h3 className="govuk-heading-s govuk-!-margin-bottom-0">
          Or choose a region on the map below to show pupil absence figures by
          local authority
        </h3>
        <Map
          ref={(n: any) => (this.mapNode = n)}
          center={position}
          className={styles.map}
          zoom={6.5}
          minZoom={6.5}
          zoomSnap={0.5}
          maxBounds={PrototypeMap.DEFAULT_BOUNDS}
        >
          <GeoJSON
            ref={(geo: any) => (this.geoRef = geo)}
            data={this.data}
            onEachFeature={this.onEachFeature}
            style={this.styleFeature}
            onClick={this.click}
          />
        </Map>
      </div>
    );
  }
}

export default PrototypeMap;
