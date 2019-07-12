---
path: "/migration"
title: "Migration Guide"
---
## Migrating to AdoptOpenJDK
If you are moving from Oracle JDK to OpenJDK from the AdoptOpenJDK project, you'll probably have a few key questions on your mind. Firstly, you'll want to know what the differences are between Oracle JDK and AdoptOpenJDK and whether there are any steps you need to take to migrate. If you've looked at the home page, you'll also know that we provide AdoptOpenJDK binaries with a choice of Java Virtual Machine (JVM). So, you might also be wondering what the difference is between the HotSpot JVM and Eclipse OpenJ9 JVM and whether your existing applications will run without any changes. The answers to these questions are covered in the sections that follow.

To understand which platforms are supported, see the [Platform Support Matrix](./supported_platforms).

## Migrating from Oracle JDK
The following table illustrates the proprietary components that can be found in Oracle JDK 8 and the alternative technologies that are either planned or available to replace them. Click on the links to learn more about each component and any steps that might be necessary to adopt them.

|Oracle JDK 8 proprietary component|Alternative component|OpenJDK 8|OpenJDK 11|
|--- |--- |--- |--- |
|Java Web Start|[IcedTea-Web](./migration#icedtea-web)|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|JavaFX|[OpenJFX](./migration#openjfx)|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i> (coming soon)|
|T2K font rendering engine|[Freetype](./migration#freetype-font-rendering-library)|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|Monotype Lucida fonts|[Relicensed Lucida fonts](./migration#relicensed-lucida-fonts)|<i class="fa fa-times" aria-hidden="true"></i> (coming soon)|<i class="fa fa-times" aria-hidden="true"></i> (coming soon)|
|Ductus 2D renderer|[Pisces/Marlin](./migration#pisces-and-marlin)|<i class="fa fa-check" aria-hidden="true"></i> (Pisces)|<i class="fa fa-check" aria-hidden="true"></i> (Marlin)|
|Kodac Color Matching System (KCMS) library|[LCMS](./migration#lcms)|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|SNMP|Use [JMX](./migration#jmx) (or SNMP4J)|<i class="fa fa-check" aria-hidden="true"></i> (not bundled)|<i class="fa fa-check" aria-hidden="true"></i> (not bundled)|
|Sound drivers|Use [Windows sound drivers](./migration#windows-sound-drivers)|<i class="fa fa-check" aria-hidden="true"></i> (not bundled)|<i class="fa fa-check" aria-hidden="true"></i> (not bundled)|
|Java Flight Recorder (JFR)|[Java Flight Recorder](./migration#java-flight-recorder)|<i class="fa fa-times" aria-hidden="true"></i> (coming soon)|<i class="fa fa-check" aria-hidden="true"></i>|
|Java Mission Control (JMC)|Use [JDK Mission Control](./migration#jdk-mission-control)|<i class="fa fa-times" aria-hidden="true"></i> (coming soon)|<i class="fa fa-times" aria-hidden="true"></i> (coming soon)|

### IcedTea-Web
Java Web Start was deprecated by Oracle in Java SE 8 and removed in Java SE 9. IcedTea-Web can provide equivalent functionality for AdoptOpenJDK 8 users.

IcedTea-Web is available to download from the [Iced-Tea Web project page](./icedtea-web) in Linux, Windows, and Portable package formats.

IcedTea-Web is also available as an optional component of the AdoptOpenJDK installer for 64-bit Windows on OpenJDK 8 that you can select from the **Custom Setup** panel. You can also choose to associate JNLP files so that when a user clicks on the JNLP file, it is automatically opened with IcedTea-Web.

By default, IcedTea-Web is installed into the OpenJDK directory and has the same executable name (`javaws.exe`) as Java Web Start. To configure settings, such as security or certificates, start the control panel by running `itweb-settings.exe`.

Use IcedTea-Web in the same way as Java Web Start. For more information, see [Developing a Java Web Start application](https://docs.oracle.com/javase/tutorial/deployment/webstart/developing.html){target="_blank"} and [Deploying a Java Web Start application](https://docs.oracle.com/javase/tutorial/deployment/webstart/deploying.html){target="_blank"}. Whilst IcedTea-Web is written to operate in the same way as Java Web Start there are a few known differences, which are raised as issues in the [GitHub project](https://github.com/AdoptOpenJDK/icedtea-web){target="_blank"}. Work is ongoing to minimize or eliminate these differences.

Note: Currently, IcedTea-Web is bundled only with the Windows MSI installer for AdoptOpenJDK 8. The installers are available only for x64 Windows systems. Further work is underway to provide IcedTea-Web as an optional component of AdoptOpenJDK 8 installers for other platforms.

### OpenJFX
Back in 2017, JavaFX was decoupled from the Oracle JDK and contributed to the OpenJDK community. The OpenJFX community is focused on OpenJFX 11+ and AdoptOpenJDK is working with the OpenJFX community to provide it via an installer option in AdoptOpenJDK binaries.

Note: OpenJFX 8 is no longer being actively maintained. If you need this capability, we recommend upgrading to OpenJFX 11.

### Freetype font rendering library
OpenJDK uses the open source FreeType font rendering library instead of the proprietary T2K font library.

### Relicensed Lucida fonts
The Lucida fonts that are available in Oracle JDK 8 have a proprietary 3rd party license. AdoptOpenJDK intend to provide relicensed Lucida fonts. Work is ongoing to minimize any display issues when these fonts are rendered by Freetype and is expected to complete in 2Q 2019.

### Pisces and Marlin
Oracle JDK 8 uses a proprietary 2D graphics renderer called Ductus, whereas OpenJDK uses an open-source renderer called Pisces. From OpenJDK 9, the Marlin renderer is in use. Work is planned at AdoptOpenJDK to either backport Marlin to OpenJDK 8 and/or minimize any display issues between the two. The outlook for completion is Q2 2019.

### LCMS
OpenJDK uses the Little Color Matching System (LCMS) open source open source library instead of the proprietary Kodac CMS library.

### JMX
The proprietary SNMP package shipped with Oracle JDK 8 is not present in OpenJDK. Use JMX as an alternative, or SNMP4J. These packages are not bundled with the AdoptOpenJDK binaries.

### Windows sound drivers
Oracle JDK provides native sound drivers for Java 8 on Windows, which are not present in OpenJDK. Use the sound drivers that are available with Microsoft Windows instead.

### Java Flight Recorder
Java Flight Recorder (JFR) was decoupled from the Oracle JDK and contributed to the OpenJDK community. Work is underway to backport JFR from OpenJDK 11 to OpenJDK 8. When this work is complete, AdoptOpenJDK will include JFR in OpenJDK 8 binaries.

### JDK Mission Control
Java Mission Control (JMC) is being open sourced under the OpenJDK [JDK Mission Control project](https://github.com/JDKMissionControl/jmc){target="_blank"}. When available, JMC will be able to receive JFR events from OpenJDK 11 and eventually OpenJDK 8, when that backport is complete.

### Migrating to Eclipse OpenJ9
[Eclipse OpenJ9](https://www.eclipse.org/openj9){target="_blank"} is an alternative JVM that implements the [Java Virtual Machine Specification](https://docs.oracle.com/javase/specs/index.html){target="_blank"}. You can think of it as a drop in replacement for the HotSpot VM, which is part of the reference implementation. Most Java applications should run on an OpenJDK that contains the OpenJ9 VM without changing anything. However, because it is an independent implementation there are some slight differences. You can learn about these differences by reading the [New to OpenJ9?](https://www.eclipse.org/openj9/docs/openj9_newuser/){target="_blank"} topic in the OpenJ9 user documentation.

### More resources
Here are a few of the resources available to help you with migrating to AdoptOpenJDK:

- Ask questions directly by joining the [AdoptOpenJDK Community Slack](./slack) group.
- Learn more about the AdoptOpenJDK project, including build and test infrastructure, by reading the [Technical Steering Committee](https://github.com/AdoptOpenJDK/TSC){target="_blank"} documentation.
- For HotSpot VM documentation, see the [HotSpot Runtime Overview](http://openjdk.java.net/groups/hotspot/docs/RuntimeOverview.html){target="_blank"}.
- For OpenJ9 VM documentation, see the [OpenJ9 user documentation](https://www.eclipse.org/openj9/docs){target="_blank"}.
