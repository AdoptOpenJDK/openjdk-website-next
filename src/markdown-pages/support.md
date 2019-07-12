---
path: "/support"
title: "Support"
---
## Community Support
Read [Java Is Still Free (2.0.0)](https://medium.com/@javachampions/java-is-still-free-2-0-0-6b9aa8d6d244){target="_blank"} for some background information about Java support options. We are prepared to stand behind our release quality binaries, so each build that is identified as a **release** receives support via the AdoptOpenJDK community. Our support means that you can raise an issue to describe a bug you have found in the build, and we will work with you and the appropriate development team to resolve it. Any fixes we identify will be delivered as part of the next AdoptOpenJDK release.

As a community of open source developers, our commitment is to triage any issues raised and champion them in the appropriate source code project. Of course, if the problem arises from the way we build and test the code we can fix that directly. For higher levels of assurance you should contact commercial companies offering support.

## Commercial Support

<div class="commercial-support">

|||
|--- |--- |
|![IBM logo](/images/ibm.svg){width=200}|IBM is a core contributor to OpenJDK and Eclipse OpenJ9 and employs several of the founders of AdoptOpenJDK and key engineers on the AdoptOpenJDK project. See [IBM Runtimes for Business](https://www.ibm.com/cloud/support-for-runtimes){target="_blank"} for more details.|
|![jClarity logo](/images/jclarity.png){width=200}|Hotspot VM - jClarity employs several of the founders of AdoptOpenJDK and key engineers on the AdoptOpenJDK project. See [jClarity's AdoptOpenJDK Support](https://www.jclarity.com/adoptopenjdk-support/){target="_blank"} for more details.|

</div>

## Release Roadmap
The frequency of AdoptOpenJDK releases is guided by the schedule of our dependencies. We produce builds based upon source code at [OpenJDK](https://openjdk.java.net/){target="_blank"}, [Eclipse OpenJ9](https://www.eclipse.org/openj9/){target="_blank"}, and [SAP Machine](https://sap.github.io/SapMachine/){target="_blank"}.

OpenJDK provides a new feature release every six months, and a maintenance/security update based upon each active release every three months. We will follow this schedule for publishing binary releases from AdoptOpenJDK to ensure you get the latest, most secure builds.

In addition, every three years one feature release will be designated as the Long Term Supported (LTS) release. We will produce LTS releases for at least four years. This assurance will allow you to stay on a well-defined code stream, and give you time to migrate to the next, new, stable, LTS release when it becomes available.

Based upon this roadmap, and starting with Java 8:

||First Availability|Next Release|End of Availability [1]|
|--- |--- |--- |--- |
|**Java 8 (LTS)**|**March 2014**|**1.8.0_222 16th July 2019**|**At Least Sep 2023**|
|Java 9|Sept 2017|N/A|March 2018|
|Java 10|March 2018|N/A|Sept 2018|
|**Java 11 (LTS)**|**Sept 2018**|**11.0.4 16th July 2019**|**At Least Sept 2022**|
|Java 12|March 2019|**12.0.2 16th July 2019**|Sept 2019|

Notes:
[1] As a general philosophy, AdoptOpenJDK will continue to build binaries for LTS releases as long as the corresponding upstream source is actively maintained. The [Eclipse OpenJ9 Support Document](https://www.eclipse.org/openj9/docs/openj9_support/){target="_blank"} covers extra support info for that VM.

<div class="home-links" style="margin-top: 3rem;">
  <a href="./quality" class="no-underline home-links">
    <h2 class="inline-block zero-margin">Quality&nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></h2>
  </a>
  <a href="./supported_platforms" class="no-underline home-links">
    <h2 class="inline-block zero-margin">Supported Platforms&nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></h2>
  </a>
  <a href="https://github.com/AdoptOpenJDK/openjdk-build/issues" class="no-underline home-links" target="_blank">
    <h2 class="inline-block zero-margin">Submit an Issue&nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></h2>
  </a>
</div>
