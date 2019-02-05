﻿// <auto-generated />
using System;
using GovUk.Education.ExploreEducationStatistics.Content.Api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GovUk.Education.ExploreEducationStatistics.Content.Api.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20190204220733_ReleaseContentOrder")]
    partial class ReleaseContentOrder
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024");

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Link", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<Guid>("PublicationId");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.HasIndex("PublicationId");

                    b.ToTable("Link");

                    b.HasData(
                        new { Id = new Guid("45bc02ff-de90-489b-b78e-cdc7db662353"), Description = "2014 to 2015", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Url = "https://www.gov.uk/government/statistics/pupil-absence-in-schools-in-england-2014-to-2015" },
                        new { Id = new Guid("82292fe7-1545-44eb-a094-80c5064701a7"), Description = "2013 to 2014", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Url = "https://www.gov.uk/government/statistics/pupil-absence-in-schools-in-england-2013-to-2014" },
                        new { Id = new Guid("6907625d-0c2e-4fd8-8e96-aedd85b2ff97"), Description = "2012 to 2013", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Url = "https://www.gov.uk/government/statistics/pupil-absence-in-schools-in-england-2012-to-2013" },
                        new { Id = new Guid("a538e57a-da5e-4a2c-a89e-b74dbae0c30b"), Description = "2011 to 2012", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Url = "https://www.gov.uk/government/statistics/pupil-absence-in-schools-in-england-including-pupil-characteristics" },
                        new { Id = new Guid("18b24d60-c56e-44f0-8baa-6db4c6e7deee"), Description = "2010 to 2011", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Url = "https://www.gov.uk/government/statistics/pupil-absence-in-schools-in-england-including-pupil-characteristics-academic-year-2010-to-2011" },
                        new { Id = new Guid("c5444f5a-6ba5-4c80-883c-6bca0d8a9eb5"), Description = "2009 to 2010", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Url = "https://www.gov.uk/government/statistics/pupil-absence-in-schools-in-england-including-pupil-characteristics-academic-year-2009-to-2010" },
                        new { Id = new Guid("e3a532c4-df72-4daf-b621-5d04418fd521"), Description = "2015 to 2016", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-in-england-2015-to-2016" },
                        new { Id = new Guid("a0a8999a-9580-48b8-b443-61446ea579e4"), Description = "2014 to 2015", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-in-england-2014-to-2015" },
                        new { Id = new Guid("97c8ee35-4c62-406c-880a-cdfc92590490"), Description = "2013 to 2014", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-in-england-2013-to-2014" },
                        new { Id = new Guid("d76afaed-a665-4366-8897-78e9b90aa28a"), Description = "2012 to 2013", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-in-england-2012-to-2013" },
                        new { Id = new Guid("7f6c5499-640a-44c7-afdc-41e78c7e8b24"), Description = "2011 to 2012", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-from-schools-in-england-2011-to-2012-academic-year" },
                        new { Id = new Guid("8c12b38a-a071-4c47-ba16-dffa734849ed"), Description = "2010 to 2011", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-from-schools-in-england-academic-year-2010-to-2011" },
                        new { Id = new Guid("04ebb3e6-67fd-41f3-89e4-ed9566bcbe96"), Description = "2009 to 2010", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-from-schools-in-england-academic-year-2009-to-2010" },
                        new { Id = new Guid("1b9375dd-06c7-4391-8265-447d6992a853"), Description = "2008 to 2009", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Url = "https://www.gov.uk/government/statistics/permanent-and-fixed-period-exclusions-in-england-academic-year-2008-to-2009" },
                        new { Id = new Guid("6404a25c-7352-4887-aa0e-c62948d45b57"), Description = "January 2017", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2017" },
                        new { Id = new Guid("31b06d27-7e31-491f-bd5d-89105369ac60"), Description = "January 2016", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2016" },
                        new { Id = new Guid("e764ef78-97f6-406c-aaaf-d3a5c847b362"), Description = "January 2015", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2015" },
                        new { Id = new Guid("1479a18c-b5a6-47c5-bb48-c8d60084b1a4"), Description = "January 2014", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2014" },
                        new { Id = new Guid("86893fdd-4a24-4fe9-9902-02ad8bbf8632"), Description = "January 2013", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2013" },
                        new { Id = new Guid("95c24ea7-4ebe-4f73-88f1-91ea33ec00bf"), Description = "January 2012", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2012" },
                        new { Id = new Guid("758b83d6-bd47-44aa-8ee2-359f350fef0a"), Description = "January 2011", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2011" },
                        new { Id = new Guid("acbef79a-7b53-492e-a679-ca994edfc892"), Description = "January 2010", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Url = "https://www.gov.uk/government/statistics/schools-pupils-and-their-characteristics-january-2010" }
                    );
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Publication", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DataSource");

                    b.Property<string>("Description");

                    b.Property<DateTime?>("NextUpdate");

                    b.Property<string>("Slug");

                    b.Property<string>("Summary");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.Property<Guid>("TopicId");

                    b.HasKey("Id");

                    b.HasIndex("TopicId");

                    b.ToTable("Publications");

                    b.HasData(
                        new { Id = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), DataSource = "[Pupil absence statistics: guide](https://www.gov.uk/government/publications/absence-statistics-guide#)", NextUpdate = new DateTime(2018, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), Slug = "pupil-absence-in-schools-in-england", Summary = "View statistics, create charts and tables and download data files for authorised, overall, persistent and unauthorised absence", Title = "Pupil absence in schools in England", TopicId = new Guid("1003fa5c-b60a-4036-a178-e3a69a81b852") },
                        new { Id = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Slug = "permanent-and-fixed-period-exclusions", Summary = "View statistics, create charts and tables and download data files for fixed-period and permanent exclusion statistics", Title = "Permanent and fixed period exclusions", TopicId = new Guid("1003fa5c-b60a-4036-a178-e3a69a81b852") },
                        new { Id = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Slug = "schools-pupils-and-their-characteristics", Summary = "Statistics on the number and characteristics of schools and pupils.", Title = "Schools, pupils and their characteristics", TopicId = new Guid("22c52d89-88c0-44b5-96c4-042f1bde6ddd") },
                        new { Id = new Guid("d04142bd-f448-456b-97bc-03863143836b"), Slug = "school-capacity", Summary = "Lorem ipsum dolor sit amet.", Title = "School capacity", TopicId = new Guid("734820b7-f80e-45c3-bb92-960edcc6faa5") },
                        new { Id = new Guid("a20ea465-d2d0-4fc1-96ee-6b2ca4e0520e"), Slug = "admission-appeals-in-England", Summary = "Lorem ipsum dolor sit amet.", Title = "Admission appeals in England", TopicId = new Guid("734820b7-f80e-45c3-bb92-960edcc6faa5") },
                        new { Id = new Guid("526dea0e-abf3-476e-9ca4-9dbd9b101bc8"), Slug = "early-years-foundation-stage-profile-results", Summary = "Lorem ipsum dolor sit amet.", Title = "Early years foundation stage profile results", TopicId = new Guid("17b2e32c-ed2f-4896-852b-513cdf466769") },
                        new { Id = new Guid("9674ac24-649a-400c-8a2c-871793d9cd7a"), Slug = "phonics-screening-check-and-ks1-assessments", Summary = "Lorem ipsum dolor sit amet.", Title = "Phonics screening check and KS1 assessments", TopicId = new Guid("17b2e32c-ed2f-4896-852b-513cdf466769") },
                        new { Id = new Guid("a4b22113-47d3-48fc-b2da-5336c801a31f"), Slug = "ks2-statistics", Summary = "Lorem ipsum dolor sit amet.", Title = "KS2 statistics", TopicId = new Guid("17b2e32c-ed2f-4896-852b-513cdf466769") },
                        new { Id = new Guid("bfdcaae1-ce6b-4f63-9b2b-0a1f3942887f"), Slug = "ks4-statistics", Summary = "Lorem ipsum dolor sit amet.", Title = "KS4 statistics", TopicId = new Guid("17b2e32c-ed2f-4896-852b-513cdf466769") },
                        new { Id = new Guid("8b2c1269-3495-4f89-83eb-524fc0b6effc"), Slug = "school-workforce", Summary = "Lorem ipsum dolor sit amet.", Title = "School workforce", TopicId = new Guid("d5288137-e703-43a1-b634-d50fc9785cb9") },
                        new { Id = new Guid("fe94b33d-0419-4fac-bf73-28299d5e4247"), Slug = "initial-teacher-training-performance-profiles", Summary = "Lorem ipsum dolor sit amet.", Title = "Initial teacher training performance profiles", TopicId = new Guid("d5288137-e703-43a1-b634-d50fc9785cb9") },
                        new { Id = new Guid("bd781dc5-cfc7-4543-b8d7-a3a7b3606b3d"), Slug = "children-in-need", Summary = "Lorem ipsum dolor sit amet.", Title = "Children in need", TopicId = new Guid("0b920c62-ff67-4cf1-89ec-0c74a364e6b4") },
                        new { Id = new Guid("143c672b-18d7-478b-a6e7-b843c9b3fd42"), Slug = "looked-after-children", Summary = "Lorem ipsum dolor sit amet.", Title = "Looked after children", TopicId = new Guid("0b920c62-ff67-4cf1-89ec-0c74a364e6b4") },
                        new { Id = new Guid("70902b3c-0bb4-457d-b40a-2a959cdc7d00"), Slug = "16-to-18-school-performance", Summary = "Lorem ipsum dolor sit amet.", Title = "16 to 18 school performance", TopicId = new Guid("6a0f4dce-ae62-4429-834e-dd67cee32860") },
                        new { Id = new Guid("d0e56978-c944-4b12-9156-bfe50c94c2a0"), Slug = "destination-of-leavers", Summary = "Lorem ipsum dolor sit amet.", Title = "Destination of leavers", TopicId = new Guid("6a0f4dce-ae62-4429-834e-dd67cee32860") },
                        new { Id = new Guid("ad81ebdd-2bbc-47e8-a32c-f396d6e2bb72"), Slug = "further-education-and-skills", Summary = "Lorem ipsum dolor sit amet.", Title = "Further education and skills", TopicId = new Guid("6a0f4dce-ae62-4429-834e-dd67cee32860") },
                        new { Id = new Guid("201cb72d-ef35-4680-ade7-b09a8dca9cc1"), Slug = "apprenticeship-and-levy-statistics", Summary = "Lorem ipsum dolor sit amet.", Title = "Apprenticeship and levy statistics", TopicId = new Guid("6a0f4dce-ae62-4429-834e-dd67cee32860") },
                        new { Id = new Guid("7bd128a3-ae7f-4e1b-984e-d1b795c61630"), Slug = "apprenticeships-and-traineeships", Summary = "Lorem ipsum dolor sit amet.", Title = "Apprenticeships and traineeships", TopicId = new Guid("6a0f4dce-ae62-4429-834e-dd67cee32860") }
                    );
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Release", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<Guid>("PublicationId");

                    b.Property<DateTime?>("Published");

                    b.Property<string>("ReleaseName");

                    b.Property<string>("Slug");

                    b.Property<string>("Summary");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("PublicationId");

                    b.ToTable("Releases");

                    b.HasData(
                        new { Id = new Guid("4fa4fe8e-9a15-46bb-823f-49bf8e0cdec5"), Content = "[{\"Order\":1,\"Heading\":\"About this release\",\"Caption\":\"\"},{\"Order\":2,\"Heading\":\"Absence rates\",\"Caption\":\"\"},{\"Order\":3,\"Heading\":\"Persistent absence\",\"Caption\":\"\"},{\"Order\":4,\"Heading\":\"Distribution of absence\",\"Caption\":\"\"},{\"Order\":5,\"Heading\":\"Absence for four year olds\",\"Caption\":\"\"},{\"Order\":6,\"Heading\":\"Pupil referral unit absence\",\"Caption\":\"\"},{\"Order\":7,\"Heading\":\"Pupil absence by local authority\",\"Caption\":\"\"}]", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Published = new DateTime(2017, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), ReleaseName = "2016 to 2017", Slug = "2016-17", Summary = "Read national statistical summaries and definitions, view charts and tables and download data files across a range of pupil absence subject areas.", Title = "Pupil absence data and statistics for schools in England" },
                        new { Id = new Guid("f75bc75e-ae58-4bc4-9b14-305ad5e4ff7d"), Content = "[{\"Order\":1,\"Heading\":\"About this release\",\"Caption\":\"\"},{\"Order\":2,\"Heading\":\"Absence rates\",\"Caption\":\"\"},{\"Order\":3,\"Heading\":\"Persistent absence\",\"Caption\":\"\"},{\"Order\":4,\"Heading\":\"Distribution of absence\",\"Caption\":\"\"},{\"Order\":5,\"Heading\":\"Absence for four year olds\",\"Caption\":\"\"},{\"Order\":6,\"Heading\":\"Pupil referral unit absence\",\"Caption\":\"\"},{\"Order\":7,\"Heading\":\"Pupil absence by local authority\",\"Caption\":\"\"}]", PublicationId = new Guid("cbbd299f-8297-44bc-92ac-558bcf51f8ad"), Published = new DateTime(2016, 3, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), ReleaseName = "2015 to 2016", Slug = "2015-16", Summary = "Read national statistical summaries and definitions, view charts and tables and download data files across a range of pupil absence subject areas.", Title = "Pupil absence data and statistics for schools in England" },
                        new { Id = new Guid("e7774a74-1f62-4b76-b9b5-84f14dac7278"), Content = "[{\"Order\":1,\"Heading\":\"About this release\",\"Caption\":\"\"},{\"Order\":2,\"Heading\":\"Permanent exclusions\",\"Caption\":\"\"},{\"Order\":3,\"Heading\":\"Fixed-period exclusions\",\"Caption\":\"\"},{\"Order\":4,\"Heading\":\"Number and length of fixed-period exclusions\",\"Caption\":\"\"},{\"Order\":5,\"Heading\":\"Reasons for exclusions\",\"Caption\":\"\"},{\"Order\":6,\"Heading\":\"Exclusions by pupil; characteristics\",\"Caption\":\"\"},{\"Order\":7,\"Heading\":\"Independent exclusion reviews\",\"Caption\":\"\"},{\"Order\":8,\"Heading\":\"Exclusions from pupil referral units\",\"Caption\":\"\"},{\"Order\":9,\"Heading\":\"Exclusions by local authority\",\"Caption\":\"\"}]", PublicationId = new Guid("bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9"), Published = new DateTime(2018, 7, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), ReleaseName = "2016 to 2017", Slug = "2016-17", Summary = "Read national statistical summaries and definitions, view charts and tables and download data files across a range of permanent and fixed-period exclusion subject areas.", Title = "Permanent and fixed period exclusions" },
                        new { Id = new Guid("e3288537-9adb-431d-adfb-9bc3ef7be48c"), Content = "[{\"Order\":1,\"Heading\":\"About this release\",\"Caption\":\"\"}]", PublicationId = new Guid("a91d9e05-be82-474c-85ae-4913158406d0"), Published = new DateTime(2018, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), ReleaseName = "January 2018 ", Slug = "january-2018", Summary = "Statistics on pupils in schools in England as collected in the January 2018 school census.", Title = " Schools, pupils and their characteristics: January 2018 " }
                    );
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Theme", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Slug");

                    b.Property<string>("Summary");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Themes");

                    b.HasData(
                        new { Id = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Slug = "early-years-and-schools", Summary = "Lorem ipsum dolor sit amet.", Title = "Early years and schools" },
                        new { Id = new Guid("6412a76c-cf15-424f-8ebc-3a530132b1b3"), Slug = "social-care", Summary = "Lorem ipsum dolor sit amet.", Title = "Social Care" },
                        new { Id = new Guid("bc08839f-2970-4f34-af2d-29608a48082f"), Slug = "higher-education", Summary = "Lorem ipsum dolor sit amet.", Title = "Higher education" }
                    );
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Topic", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Slug");

                    b.Property<string>("Summary");

                    b.Property<Guid>("ThemeId");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("ThemeId");

                    b.ToTable("Topics");

                    b.HasData(
                        new { Id = new Guid("1003fa5c-b60a-4036-a178-e3a69a81b852"), Slug = "absence-and-exclusions", Summary = "Pupil absence and permanent and fixed-period exclusions statistics and data", ThemeId = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Title = "Absence and exclusions" },
                        new { Id = new Guid("22c52d89-88c0-44b5-96c4-042f1bde6ddd"), Slug = "school-and-pupil-numbers", Summary = "Schools, pupils and their characteristics, SEN and EHC plans, SEN in England", ThemeId = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Title = "School & pupil numbers" },
                        new { Id = new Guid("734820b7-f80e-45c3-bb92-960edcc6faa5"), Slug = "capacity-admissions", Summary = "School capacity, admission appeals", ThemeId = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Title = "Capacity and admissions" },
                        new { Id = new Guid("17b2e32c-ed2f-4896-852b-513cdf466769"), Slug = "results", Summary = "Local authority and school finance", ThemeId = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Title = "Results" },
                        new { Id = new Guid("66ff5e67-36cf-4210-9ad2-632baeb4eca7"), Slug = "school-finance", Summary = "Local authority and school finance", ThemeId = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Title = "School finance" },
                        new { Id = new Guid("d5288137-e703-43a1-b634-d50fc9785cb9"), Slug = "teacher-numbers", Summary = "The number and characteristics of teachers", ThemeId = new Guid("cc8e02fd-5599-41aa-940d-26bca68eab53"), Title = "Teacher Numbers" },
                        new { Id = new Guid("0b920c62-ff67-4cf1-89ec-0c74a364e6b4"), Slug = "number-of-children", Summary = "Lorem ipsum dolor sit amet.", ThemeId = new Guid("6412a76c-cf15-424f-8ebc-3a530132b1b3"), Title = "Number of Children" },
                        new { Id = new Guid("3bef5b2b-76a1-4be1-83b1-a3269245c610"), Slug = "vulnerable-children", Summary = "Lorem ipsum dolor sit amet.", ThemeId = new Guid("6412a76c-cf15-424f-8ebc-3a530132b1b3"), Title = "Vulnerable Children" },
                        new { Id = new Guid("6a0f4dce-ae62-4429-834e-dd67cee32860"), Slug = "further-education", Summary = "Lorem ipsum dolor sit amet.", ThemeId = new Guid("bc08839f-2970-4f34-af2d-29608a48082f"), Title = "Further Education" },
                        new { Id = new Guid("4c658598-450b-4493-b972-8812acd154a7"), Slug = "higher-education", Summary = "Lorem ipsum dolor sit amet.", ThemeId = new Guid("bc08839f-2970-4f34-af2d-29608a48082f"), Title = "Higher Education" }
                    );
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Update", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("On");

                    b.Property<string>("Reason")
                        .IsRequired();

                    b.Property<Guid>("ReleaseId");

                    b.HasKey("Id");

                    b.HasIndex("ReleaseId");

                    b.ToTable("Update");

                    b.HasData(
                        new { Id = new Guid("9c0f0139-7f88-4750-afe0-1c85cdf1d047"), On = new DateTime(2017, 4, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "Underlying data file updated to include absence data by pupil residency and school location, and updated metadata document.", ReleaseId = new Guid("4fa4fe8e-9a15-46bb-823f-49bf8e0cdec5") },
                        new { Id = new Guid("18e0d40e-bdf7-4c84-99dd-732e72e9c9a5"), On = new DateTime(2017, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "First published.", ReleaseId = new Guid("4fa4fe8e-9a15-46bb-823f-49bf8e0cdec5") },
                        new { Id = new Guid("51bd1e2f-2669-4708-b300-799b6be9ec9a"), On = new DateTime(2016, 3, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "First published.", ReleaseId = new Guid("f75bc75e-ae58-4bc4-9b14-305ad5e4ff7d") },
                        new { Id = new Guid("4fca874d-98b8-4c79-ad20-d698fb0af7dc"), On = new DateTime(2018, 7, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "First published.", ReleaseId = new Guid("e7774a74-1f62-4b76-b9b5-84f14dac7278") },
                        new { Id = new Guid("33ff3f17-0671-41e9-b404-5661ab8a9476"), On = new DateTime(2018, 8, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = " Updated exclusion rates for Gypsy/Roma pupils, to include extended ethnicity categories within the headcount (Gypsy, Roma and other Gypsy/Roma). ", ReleaseId = new Guid("e7774a74-1f62-4b76-b9b5-84f14dac7278") },
                        new { Id = new Guid("9aab1af8-27d4-43c4-a7cd-afb375c8809c"), On = new DateTime(2018, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "First published.", ReleaseId = new Guid("e3288537-9adb-431d-adfb-9bc3ef7be48c") },
                        new { Id = new Guid("aa4c0f33-cdf4-4df9-9540-18472d46a301"), On = new DateTime(2018, 6, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "Amended title of table 8e in attachment 'Schools pupils and their characteristics 2018 - LA tables'.", ReleaseId = new Guid("e3288537-9adb-431d-adfb-9bc3ef7be48c") },
                        new { Id = new Guid("4bd0f73b-ef2b-4901-839a-80cbf8c0871f"), On = new DateTime(2018, 7, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "Removed unrelated extra material from table 7c in attachment 'Schools pupils and their characteristics 2018 - LA tables'.", ReleaseId = new Guid("e3288537-9adb-431d-adfb-9bc3ef7be48c") },
                        new { Id = new Guid("7f911a4e-7a56-4f6f-92a6-bd556a9bcfd3"), On = new DateTime(2018, 9, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "Added cross-border movement local authority level and underlying data tables.", ReleaseId = new Guid("e3288537-9adb-431d-adfb-9bc3ef7be48c") },
                        new { Id = new Guid("d008b331-af29-4c7e-bb8a-5a2005aa0131"), On = new DateTime(2018, 9, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), Reason = "Added open document version of 'Schools pupils and their characteristics 2018 - Cross-border movement local authority tables'.", ReleaseId = new Guid("e3288537-9adb-431d-adfb-9bc3ef7be48c") }
                    );
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Link", b =>
                {
                    b.HasOne("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Publication")
                        .WithMany("LegacyReleases")
                        .HasForeignKey("PublicationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Publication", b =>
                {
                    b.HasOne("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Topic", "Topic")
                        .WithMany("Publications")
                        .HasForeignKey("TopicId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Release", b =>
                {
                    b.HasOne("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Publication", "Publication")
                        .WithMany("Releases")
                        .HasForeignKey("PublicationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Topic", b =>
                {
                    b.HasOne("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Theme", "Theme")
                        .WithMany("Topics")
                        .HasForeignKey("ThemeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Update", b =>
                {
                    b.HasOne("GovUk.Education.ExploreEducationStatistics.Content.Api.Models.Release", "Release")
                        .WithMany("Updates")
                        .HasForeignKey("ReleaseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
