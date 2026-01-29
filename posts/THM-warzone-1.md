# THM Lab: Warzone 1
**Date:** Jan 27, 2026

## Overview
It is a defensive, network-focused challenge on TryHackMe designed to simulate a real-world Security Operations Center (SOC) investigation.

## Tools used in this Lab
### Brim (Zui)
Brim (now increasingly known as Zui) is an open-source desktop application designed to bridge the gap between heavy packet captures and easy-to-search logs. It is a favorite in the TryHackMe curriculum because it simplifies the "needle in a haystack" problem during network investigations.
### Wireshark
Wireshark is a graphical network protocol analyzer. it captures network traffic and lets you "see" exactly what is happening inside the wires. It decodes thousands of different protocols, from basic web browsing (HTTP) to complex database queries.

## Answers
### ***Your shift just started and your first network alert comes in.***
---
***1. What was the alert signature for Malware Command and Control Activity Detected?***
#### Environment Setup
The investigation began on a dedicated analysis workstation. The following artifacts and tools were located on the desktop:
- **Artifact:** warzone1.pcap (The raw network traffic).
- **Tools:** Brim (for high-level log visualization) and Wireshark (for deep packet inspection).

#### Identifying the Malicious Activity
To quickly filter through thousands of network packets, Importe the PCAP into Brim. By leveraging the integrated IDS (Intrusion Detection System) engine, look for any flagged signatures that would indicate a known threat.
- Observation: Immediately upon loading the file, a high-severity alert was identified.
- Alert Signature: `ET MALWARE MirrorBlast CnC Activity M3`

![Alt text](rec/writeups/warzone-1/Screenshot-01.png)

**Answer 1:** `ET MALWARE MirrorBlast CnC Activity M3`

---
***2. What IP address was the destination IP in the alert? Enter your answer in a defanged format.***
- Source IP (From Alert Msg): `172.16.1.102`
#### Defanging the Evidence
As part of standard malware reporting procedures, malicious or compromised indicators are "defanged" to prevent accidental navigation to harmful infrastructure.

![Alt text](rec/writeups/warzone-1/Screenshot-02.png)

**Answer 2**: ` 172[.]16[.]1[.]102`

---
***3. What IP address was the destination IP in the alert? Enter your answer in a defanged format.***
- Destination IP (From Alert Msg): `169.239.128.11`

![Alt text](rec/writeups/warzone-1/Screenshot-03.png)

**Answer 3**: ` 169[.]239[.]128[.]11`

---
***4. Still in VirusTotal, under Community, what threat group is attributed to this IP address?***
After identifying the destination IP from the initial Brim alert, Use VirusTotal (https://www.virustotal.com/gui/home/search) to determine the reputation of the external infrastructure.
- Destination IP: `169.239.128.11`
- Attributed Threat Group: `TA505` (also known as Graceful Spider or Gold Tahoe).
![Alt text](rec/writeups/warzone-1/Screenshot-04.png)
**Answer 4**: `TA505`

---
***5. What is the malware family?***

**MirrorBlast** is a lightweight, sophisticated malware loader primarily used as an initial entry point in a cyberattack. First identified in late 2021 by researchers at Proofpoint and Morphisec, it is a signature tool of the financially motivated threat group `TA505`.
![Alt text](rec/writeups/warzone-1/Screenshot-05.png)
**Answer 5**: `MirrorBlast`


---
***6. Do a search in VirusTotal for the domain from question 4. What was the majority file type listed under Communicating Files?***

**Analyzing Communicating Files**
By checking the "Communicating Files" section on VirusTotal, we can see which files have been observed reaching out to this specific domain.
- Observation: The list is dominated by files with the `.msi` extension.
- Conclusion: This indicates that the primary delivery mechanism for the MirrorBlast malware in this campaign is through Windows Installer packages.

![Alt text](rec/writeups/warzone-1/Screenshot-06.png)
**Answer 6**: `Windows Installer`


---
***7. Inspect the web traffic for the flagged IP address; what is the user-agent in the traffic?***

Inspect the specific HTTP traffic originating from the victim and heading to the C2 server. By selecting the flagged flow in Brim and examining the user_agent field, a highly unusual string was identified.

- User-Agent Found: `REBOL View 2.7.8.3.1`

![Alt text](rec/writeups/warzone-1/Screenshot-07.png)

**Answer 7**: `REBOL View 2.7.8.3.1`


---
***8. Retrace the attack; there were multiple IP addresses associated with this attack. What were two other IP addresses? Enter the IP addressed defanged and in numerical order. (format: IPADDR,IPADDR)***

By analyzing the results of the below query, I observed that the majority of hosts were benign system services. However, two specific external IP addresses stood out because they were associated with the download of the .msi payloads previously identified.
Query : `_path=="http" | cut id.orig_h, id.resp_h, id.resp_p, method, host, uri | uniq -c`
Findings:
- `185.10.68.235` (Source for filter.msi)
- `192.36.27.92` (Source for 10opd3r_load.msi)

![Alt text](rec/writeups/warzone-1/Screenshot-08.png)

**Answer 8**: `185[.]10[.]68[.]235,192[.]36[.]27[.]92`


---
***9. What were the file names of the downloaded files? Enter the answer in the order to the IP addresses from the previous question. (format: file.xyz,file.xyz)***
Shortcut : Inspect the above traffics
To identify the specific files downloaded by the victim, return to Brim and use a targeted query (or use search) to search for Windows Installer files within the HTTP logs.
- Brim Query: `.msi`
- Methodology: By filtering the uri and filename fields for the .msi extension, I was able to isolate the exact moments the malware was pulled onto the workstation.

![Alt text](rec/writeups/warzone-1/Screenshot-09.png)

**Answer 9**: `filter.msi,10opd3r_load.msi`


---
***10. Inspect the traffic for the first downloaded file from the previous question. Two files will be saved to the same directory. What is the full file path of the directory and the name of the two files? (format: C:\path\file.xyz,C:\path\file.xyz)***

Follow the TCP Stream of the IP addresses to get the Files

![Alt text](rec/writeups/warzone-1/Screenshot-10.png)

**Answer 10**: `C:\ProgramData\001\arab.bin,C:\ProgramData\001\arab.exe`

---
***11. Now do the same and inspect the traffic from the second downloaded file. Two files will be saved to the same directory. What is the full file path of the directory and the name of the two files? (format: C:\path\file.xyz,C:\path\file.xyz)***

Do the same as question number 10 (Follow the TCP Stream)

![Alt text](rec/writeups/warzone-1/Screenshot-11.png)

**Answer 11**: `C:\ProgramData\Local\Google\rebol-view-278-3-1.exe,C:\ProgramData\Local\Google\exemple.rb`

