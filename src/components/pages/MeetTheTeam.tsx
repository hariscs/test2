import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout3 from '../layouts/Layout-3';
import Script from 'next/script';
import WidgetScript from '@/components/WidgetScript';

const gridData0 = [
  {
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-ceo-rr-fl-bio-reese-morgan/",
    "title": "Executive Director (East Coast)",
    "href1": "https://www.linkedin.com/in/reese-morgan-8b0b08a2/",
    "description": "Business Units",
    "href2": "https://renaissancerecovery.com/",
    "image": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-jack-petti/",
    "title": "Chief Executive Officer",
    "href1": "",
    "description": "Business Units",
    "href2": "https://alliancerecovery.com/",
    "image": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-kevin-cataldi/",
    "title": "Director of Outreach",
    "href1": "https://www.linkedin.com/in/kevin-cataldi-a71983140/",
    "description": "Business Units",
    "href2": "https://alliancerecovery.com/",
    "image": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-matt-montesanto/",
    "title": "Chief Financial Officer",
    "href1": "",
    "description": "Business Units",
    "href2": "https://alliancerecovery.com/",
    "image": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/mark-williams/",
    "title": "Founder",
    "href1": "https://www.linkedin.com/in/mark-williams-mba-4b833a56/",
    "description": "Business Units",
    "href2": "http://gratitudelodge.com/",
    "image": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  }
] as const;

const gridData1 = [
  {
    "image": "/images/93d750b2f5ff3a09045b16dac1026ffd.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/emma-psomas-clinical-therapist-bio/",
    "title": "Clinical Therapist (California)",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/d1d6cd7a69d472cf814c2323719797ca.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/clinical-therapist-bio-krista-muldoon/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/63f53e9878beb2bc94d88407af5b30e2.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/clinical-therapist-bio-valanda-german/",
    "title": "TherapistAPCC, AMFT",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/3d7ace3d5d6a8e74f20570b55f9d0aa3.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/clinical-therapist-bio-brooke-whitfield-fattovich/",
    "title": "Clinical Therapist (Florida)LMHC",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/1fda00f9697269b4e868f22ae450804d.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/clinical-therapist-bio-tonya-parker/",
    "title": "TherapistASW",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-therapist-bio-joel-cachola/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/jack-murphy/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/jose-rodriguez/",
    "title": "TherapistAPCC",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/joseph-pennino/",
    "title": "Associate TherapistAPCC,AMFT",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/maggie-fortin/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "http://californiadetox.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg"
  },
  {
    "image": "/images/99de8621067399c25990fe33b1df3f4a.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/martin-lopez/",
    "title": "TherapistAPCC",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/natalie-pocoroba/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/rachael-fitzirwin/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/4f10e29fb14bfb90c41f76365afccd3a.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/ryan-ruiz/",
    "title": "TherapistAMFT",
    "description": "Business Units",
    "href1": "https://connectionsoc.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg"
  }
] as const;

const gridData2 = [
  {
    "image": "/images/b062532bc0d12bab6cb2207cf07a453b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/marcus-harper-case-manager-bio/",
    "title": "Case ManagerRADT",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/3937057c0470251d75338e25bc1f3a3a.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/case-manager-bio-cassandra-hill/",
    "title": "Case Manager (Florida)",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/396415b75ee881f225637b9962310e0d.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-case-manager-bio-jon-bacak/",
    "title": "Case ManagerSUDRC",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/03c08294d8024d718769646625e16a80.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-case-manager-bio-carey-yath/",
    "title": "Case Manager",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/8b015b966f605424f9f946ea47e16d6d.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/abigail-lira/",
    "title": "Case ManagerCADC-I",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/c75156eba80735763e1d8e37f5501f40.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/amber-mcginley/",
    "title": "Case ManagersRADT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/devon-kimble/",
    "title": "Case ManagersRAC",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/james-krier/",
    "title": "Case ManagerCPRM",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/4dae7ca9b386690073c894fd88802dd2.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/jeff-robbins/",
    "title": "Case ManagerRADT",
    "description": "Business Units",
    "href1": "http://californiadetox.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/jesus-dominguez/",
    "title": "Case ManagerSUDRC",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/jon-bueno/",
    "title": "Case ManagerRADT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/kristof-vilgertshofer/",
    "title": "Case ManagerRADT",
    "description": "Business Units",
    "href1": "http://californiadetox.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/matthew-fleming/",
    "title": "Case ManagerRADT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/2c3efac7ee304ac439fc5eb16621f2dd.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/rachel-heiden/",
    "title": "Case ManagerCADC-III",
    "description": "Business Units",
    "href1": "http://californiadetox.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg"
  },
  {
    "image": "/images/2acba35185ff1d9a54118cfb029cda8c.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/ricky-albillar/",
    "title": "Case ManagerSUDCC-II",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/ryan-narriman/",
    "title": "Case ManagerSUDCC",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/51cf52471c9eefa61a279ac1b249c97e.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/tiffany-stevens/",
    "title": "Case ManagersCADC-ll",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  }
] as const;

const gridData3 = [
  {
    "image": "/images/cbb7e36abdc8593fa0f9a0a8a9cbfd32.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/operations-support-bio-chance-lyons/",
    "title": "Operations LeadSUDRC",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/e42ee35296e864d1dcbe3215c7cb1521.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/director-of-operations-bio-richie-mintz/",
    "title": "Director of Operations (Florida RR FL)CRRA",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/6b6023946d7a9abbf39538935579d4f4.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/chief-operating-officer-bio-kolby-seger/",
    "title": "Chief Operating Officer",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/b9e52cb95e217479ee4de044bbc7a35f.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/operations-manager-bio-kayla-matino/",
    "title": "Operations ManagerCADC 1",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/5fe5cc2d3d75a3c86863f6676c27b762.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/operations-lead-bio-leah-mcguire-berning/",
    "title": "Operations LeadRADT",
    "description": "Business Units",
    "href1": "https://renaissancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/ayden-carney/",
    "title": "Lead Behavioral Health TechnicianRADT",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/0ccb9c9d7814df307a370f9d3be10870.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/celia-taylor/",
    "title": "OperationsRADT",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/dave-grasso/",
    "title": "Operations Manager",
    "description": "Business Units",
    "href1": "http://californiadetox.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg"
  },
  {
    "image": "/images/495652139551cf5d7dfc5843a4e25fc3.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/jayla-pierce/",
    "title": "Operations TeamRAC",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  },
  {
    "image": "/images/3c17a2a7fa2e63fff364f85338761aba.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/pablo-alcala/",
    "title": "Director of  Operations",
    "description": "Business Units",
    "href1": "http://californiadetox.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg"
  },
  {
    "image": "/images/bb55d389b6498f3f1839dab691384bb9.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/sierra-nicodemus/",
    "title": "Operations TeamRADT",
    "description": "Business Units",
    "href1": "http://gratitudelodge.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg"
  }
] as const;

const gridData4 = [
  {
    "image": "/images/b3db21364a940a0c978fa8c4287708c6.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/amy-leifeste-editor-bio/",
    "title": "Writer",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg",
    "href2": "http://californiadetox.com/",
    "image2": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg",
    "href3": "https://connectionsoc.com/",
    "image3": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg",
    "href4": "http://gratitudelodge.com/",
    "image4": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg",
    "href5": "https://renaissancerecovery.com/",
    "image5": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/35cd0067de7f1b9266ae3aef68732ad2.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-medical-reviewer-bio-ysabella-esteban-md/",
    "title": "Medical Reviewer",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg",
    "href2": "http://californiadetox.com/",
    "image2": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg",
    "href3": "https://connectionsoc.com/",
    "image3": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg",
    "href4": "http://gratitudelodge.com/",
    "image4": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg",
    "href5": "https://renaissancerecovery.com/",
    "image5": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/d91acd07e8941db5920d963d6e396732.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-medical-reviewer-bio-saira-zulfiqar/",
    "title": "Medical Reviewer",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg",
    "href2": "http://californiadetox.com/",
    "image2": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg",
    "href3": "https://connectionsoc.com/",
    "image3": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg",
    "href4": "http://gratitudelodge.com/",
    "image4": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg",
    "href5": "https://renaissancerecovery.com/",
    "image5": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/1b159ee58a470df722a3597d0e72241b.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/staff-author-brittany-mccoy/",
    "title": "Content Operations Manager",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg",
    "href2": "http://californiadetox.com/",
    "image2": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg",
    "href3": "https://connectionsoc.com/",
    "image3": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg",
    "href4": "http://gratitudelodge.com/",
    "image4": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg",
    "href5": "https://renaissancerecovery.com/",
    "image5": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  },
  {
    "image": "/images/61b6f9b9f5943a0fe578dab21f7926eb.webp",
    "href": "https://wordpress-1444306-6432440.cloudwaysapps.com/authors/karena-mathis/",
    "title": "Writers",
    "description": "Business Units",
    "href1": "https://alliancerecovery.com/",
    "image1": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg",
    "href2": "http://californiadetox.com/",
    "image2": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg",
    "href3": "https://connectionsoc.com/",
    "image3": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg",
    "href4": "http://gratitudelodge.com/",
    "image4": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg",
    "href5": "https://renaissancerecovery.com/",
    "image5": "https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg"
  }
] as const;

export default function DistrictBehavioralHealth() {
  return (
    <Layout3>
      <div id="content" className="site-main post-2113 page type-page status-publish hentry">
        <div className="page-header">
          <h1 className="entry-title">Meet the Team</h1>
        </div>
        <div className="page-content">
          <div className="elementor elementor-2113">
            <div className="elementor-element elementor-element-386137d e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-2829273 elementor-widget-mobile__width-auto elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <link rel="preload" as="image" href="/images/8950c12e2a1558067ff55ea38ae441b1.webp" fetchPriority="high" /><img fetchPriority="high" src="/images/8950c12e2a1558067ff55ea38ae441b1.webp" alt="banner left img" className="attachment-full size-full wp-image-2128" style={{maxWidth: "100%", height: "auto"}} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-cffef7b e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-fc1a1e3 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Our Team</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4fa530f elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">Compassionate care, delivered by experienced professionals.</div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-bba96c1 elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <img loading="lazy" src="/images/a089ef3f2d57196877e0a23464271aa5.webp" alt="banner right img" className="attachment-full size-full wp-image-2127" style={{maxWidth: "100%", height: "auto"}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6a177a8 author-loop e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-11b093d elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Executive Team</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-eae4436 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      {gridData0.map((item, i) => (
                        <div key={i} className="elementor elementor-103473 e-loop-item e-loop-item-92304 post-92304 authors type-authors status-publish has-post-thumbnail hentry category-executive-team business-unit-renaissance-recovery intent-high topic-staff">
                          <div className="elementor-element elementor-element-7b68fbab e-transform author-card e-flex e-con-boxed e-con e-parent e-lazyloaded">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-319deed9 e-con-full e-flex e-con e-child"></div>
                              <div className="elementor-element elementor-element-777eaa72 e-con-full content-wrapper e-flex e-con e-child">
                                <div className="elementor-element elementor-element-79d46fe e-con-full e-flex e-con e-child">
                                  <div className="elementor-element elementor-element-345c4b20 team-name-sty animated-head elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                    <div className="elementor-widget-container">
                                      <Link href={item.href}>
                                        <h3 className="elementor-headline e-animated">
                                          <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Reese</span>
                                          <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                            <span className="elementor-headline-dynamic-text elementor-headline-text-active">Morgan</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                              <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                            </svg>
                                          </span>
                                        </h3>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-1c9a97b9 designation-certification-heading elementor-widget elementor-widget-heading">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">{item.title}</h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-5f5fe7e8 e-con-full e-flex e-con e-child">
                                  <div className="elementor-element elementor-element-53dfc857 elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <Link href={item.href1} className="elementor-icon" rel="nofollow noopener" target="_blank">
                                          <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                          </svg>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-26d3535d elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-5d14b59c e-con-full content-wrapper e-flex e-con e-child">
                                <div className="elementor-element elementor-element-36f59b96 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default">{item.description}</h4>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-3091f5f2 elementor-widget elementor-widget-shortcode">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                      <div className="author-business-units-wrapper">
                                        <Link href={item.href2} className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image} alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-4bc6286 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-446f43e elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Clinical Team</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6a03a2e elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92216 post-92216 authors type-authors status-publish has-post-thumbnail hentry category-clinical-team business-unit-alliance-recovery business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/03222dddd4c2408ae824a86581c30b75.webp" alt="Frame 2147227288" className="attachment-full size-full wp-image-103924" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/alina-nejadian-clinical-director-bio/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Alina</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Nejadian</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Clinical DirectorLMFT
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92218 post-92218 authors type-authors status-publish has-post-thumbnail hentry category-clinical-team business-unit-alliance-recovery business-unit-california-detox business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/7111a65f56d3d19153e57803b66439ea.webp" alt="Frame 2147227375" className="attachment-full size-full wp-image-103925" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/caitlin-garcia-program-director-bio/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Caitlin</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Garcia</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Program DirectorCADC-II
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92294 post-92294 authors type-authors status-publish has-post-thumbnail hentry category-clinical-team business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/987a41e800fff7434ac6cb672d476775.webp" alt="image 128 2" className="attachment-full size-full wp-image-103953" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-clinical-director-rr-fl-bio-dr-matthew-durso/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Dr. Matthew</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">D'urso</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Clinical Director (Florida)Ph.D
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103846 post-103846 authors type-authors status-publish hentry category-clinical-team business-unit-gratitude-lodge">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/2c82f61550ef11ef3d7dc9979f33578b.webp" alt="image 126 2" className="attachment-full size-full wp-image-103954" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/nicholas-trolley/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Nicholas</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Trolley</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Program AdministratorCADC ll
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103858 post-103858 authors type-authors status-publish hentry category-clinical-team business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/b38ed13f59c998de55aa81d78fd24386.webp" alt="image 125" className="attachment-full size-full wp-image-103955" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/sean-oneill/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Sean</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">O'Neill</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Clinical DirectorLMFT
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103866 post-103866 authors type-authors status-publish hentry category-clinical-team business-unit-alliance-recovery">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/f15b47b8b728fd36921d856defaf4f30.webp" alt="Will Dunbar AR Community Director scaled" className="attachment-full size-full wp-image-103867" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/will-dunbar/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Will</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Dunbar</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Community DirectorSUDRC
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f89c085 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a2179fa elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Therapists</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-155ce2a elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      {gridData1.map((item, i) => (
                        <div key={i} className="elementor elementor-103459 e-loop-item e-loop-item-92228 post-92228 authors type-authors status-publish has-post-thumbnail hentry category-therapists business-unit-gratitude-lodge intent-high topic-staff">
                          <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                            <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                                <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                  <div className="elementor-widget-container">
                                    <img loading="lazy" src={item.image} alt="image 123" className="attachment-full size-full wp-image-103956" style={{maxWidth: "100%", height: "auto"}} />
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                  <div className="elementor-widget-container">
                                    <Link href={item.href}>
                                      <h3 className="elementor-headline e-animated">
                                        <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Emma</span>
                                        <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                          <span className="elementor-headline-dynamic-text elementor-headline-text-active">Psomas</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                          </svg>
                                        </span>
                                      </h3>
                                    </Link>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">{item.title}</h3>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                                <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default">{item.description}</h4>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                      <div className="author-business-units-wrapper">
                                        <Link href={item.href1} className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image1} alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f266153 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-74fe8d2 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Case Managers</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-081a131 elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      {gridData2.map((item, i) => (
                        <div key={i} className="elementor elementor-103459 e-loop-item e-loop-item-92224 post-92224 authors type-authors status-publish has-post-thumbnail hentry category-case-managers business-unit-renaissance-recovery intent-high topic-staff">
                          <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                            <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                                <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                  <div className="elementor-widget-container">
                                    <img loading="lazy" src={item.image} alt="Marcus Harper RR Case Manager.webp" className="attachment-full size-full wp-image-103931" style={{maxWidth: "100%", height: "auto"}} />
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                  <div className="elementor-widget-container">
                                    <Link href={item.href}>
                                      <h3 className="elementor-headline e-animated">
                                        <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Marcus</span>
                                        <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                          <span className="elementor-headline-dynamic-text elementor-headline-text-active">Harper</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                          </svg>
                                        </span>
                                      </h3>
                                    </Link>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      {item.title}
                                      <br />
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                                <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default">{item.description}</h4>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                      <div className="author-business-units-wrapper">
                                        <Link href={item.href1} className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image1} alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-58ec60f e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-86616a9 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Operations</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3f20be1 elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      {gridData3.map((item, i) => (
                        <div key={i} className="elementor elementor-103459 e-loop-item e-loop-item-92254 post-92254 authors type-authors status-publish has-post-thumbnail hentry category-operations business-unit-alliance-recovery intent-high topic-staff">
                          <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                            <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                                <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                  <div className="elementor-widget-container">
                                    <img loading="lazy" src={item.image} alt="image 129" className="attachment-full size-full wp-image-103968" style={{maxWidth: "100%", height: "auto"}} />
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                  <div className="elementor-widget-container">
                                    <Link href={item.href}>
                                      <h3 className="elementor-headline e-animated">
                                        <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Chance</span>
                                        <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                          <span className="elementor-headline-dynamic-text elementor-headline-text-active">Lyons</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                          </svg>
                                        </span>
                                      </h3>
                                    </Link>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      {item.title}
                                      <br />
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                                <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default">{item.description}</h4>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                      <div className="author-business-units-wrapper">
                                        <Link href={item.href1} className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image1} alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-64a7b95 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-0fe1ace elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Writers</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2cb5dd0 elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      {gridData4.map((item, i) => (
                        <div key={i} className="elementor elementor-103459 e-loop-item e-loop-item-92206 post-92206 authors type-authors status-publish has-post-thumbnail hentry category-writers business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                          <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                            <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                                <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                  <div className="elementor-widget-container">
                                    <img loading="lazy" src={item.image} alt="AmyLeifeste RenaissanceRecovery.webp" className="attachment-full size-full wp-image-103939" style={{maxWidth: "100%", height: "auto"}} />
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                  <div className="elementor-widget-container">
                                    <Link href={item.href}>
                                      <h3 className="elementor-headline e-animated">
                                        <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Amy</span>
                                        <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                          <span className="elementor-headline-dynamic-text elementor-headline-text-active">Leifeste</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                          </svg>
                                        </span>
                                      </h3>
                                    </Link>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">{item.title}</h3>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                                <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                      <span className="elementor-divider-separator"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h4 className="elementor-heading-title elementor-size-default">{item.description}</h4>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                      <div className="author-business-units-wrapper">
                                        <Link href={item.href1} className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image1} alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                        <Link href={item.href2} className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image2} alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                        <Link href={item.href3} className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image3} alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                        <Link href={item.href4} className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image4} alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                        <Link href={item.href5} className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                          <img loading="lazy" src={item.image5} alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-eab3835 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-335f131 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Admissions</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f1be893 elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92315 post-92315 authors type-authors status-publish has-post-thumbnail hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/2d2519644b2c0cac794d345a4d4af7a9.webp" alt="image 116" className="attachment-full size-full wp-image-103969" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-tj-harrison/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">TJ</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Harrison</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Vice President of Business Development</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92323 post-92323 authors type-authors status-publish has-post-thumbnail hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/6fa28fe0495ca4c57f278d9f76b6e63d.webp" alt="image 115" className="attachment-full size-full wp-image-103970" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-clinical-outreach-specialist-bio-daniel-danny-ruff/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Daniel (Danny)</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Ruff</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Clinical Outreach Specialist</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92321 post-92321 authors type-authors status-publish has-post-thumbnail hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/2f8680bf4b0025454df074f0418e243e.webp" alt="MeliaWells RenaissanceRecovery.webp" className="attachment-full size-full wp-image-103942" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-admissions-counselor-bio-melia-wells/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Melia</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Wells</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92320 post-92320 authors type-authors status-publish hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/1b159ee58a470df722a3597d0e72241b.webp" alt="placeholder img" className="attachment-full size-full wp-image-103529" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-admissions-counselor-bio-ryan-hoover/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Ryan</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Hoover</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92331 post-92331 authors type-authors status-publish has-post-thumbnail hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/bb54e766cc544b233158dfb88472c36c.webp" alt="DallasJones RenaissanceRecovery.webp" className="attachment-full size-full wp-image-103943" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-admissions-counselor-bio-dallas-jones/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Dallas</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Jones</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Director</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92332 post-92332 authors type-authors status-publish has-post-thumbnail hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/c96ae4b997b3164480290dccf7696b2c.webp" alt="CynthiaChacon RenaissanceRecovery.webp" className="attachment-full size-full wp-image-103944" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-admissions-counselor-bio-cynthia-chacon/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Cynthia</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Chacon</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92335 post-92335 authors type-authors status-publish has-post-thumbnail hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/1cf32b1bdabe0a3201cbabbdcc2294ce.webp" alt="robert manning admissions renaissance recovery background.webp" className="attachment-full size-full wp-image-103945" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-admissions-counselor-bio-robert-manning/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Robert</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Manning</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103202 post-103202 authors type-authors status-publish hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/1b159ee58a470df722a3597d0e72241b.webp" alt="placeholder img" className="attachment-full size-full wp-image-103529" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/keith-dacosta/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Keith</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Dacosta</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Alumni Coordinator</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103814 post-103814 authors type-authors status-publish hentry category-admissions business-unit-california-detox business-unit-connections-mental-health">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/1b159ee58a470df722a3597d0e72241b.webp" alt="placeholder img" className="attachment-full size-full wp-image-103529" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/blakelynn-muck/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Blakelynn</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Muck</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103820 post-103820 authors type-authors status-publish hentry category-admissions business-unit-alliance-recovery">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/26036ce67f4479f87f95ac2061da7a62.webp" alt="james bilotti admissions alliance recovery background scaled" className="attachment-full size-full wp-image-103821" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/james-bilotti/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">James</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Bilotti</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103831 post-103831 authors type-authors status-publish hentry category-admissions business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/015b8056faad40909068436e63a00ba4.webp" alt="JosephSanchez RenaissanceRecovery.webp" className="attachment-full size-full wp-image-103941" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/joseph-sanchez/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Joseph</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Sanchez</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admissions Counselor</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-103862 post-103862 authors type-authors status-publish hentry category-admissions business-unit-alliance-recovery">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/40440459d427c48f473529b6702f9392.webp" alt="TaylorBerry AllianceRecovery scaled" className="attachment-full size-full wp-image-103863" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/taylor-berry/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Taylor</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Berry</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Admssion Counseior</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-14393d0 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-2534edc elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Admin</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-19550be elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 team-members__loop elementor-widget elementor-widget-loop-grid">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92246 post-92246 authors type-authors status-publish has-post-thumbnail hentry category-admin business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/f0bf86a6791de6b62a41dc6410c48dc4.webp" alt="Jamie Courtney all units Human Resources Director.webp" className="attachment-full size-full wp-image-103948" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/human-resources-bio-jamie-courtney/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Jamie</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Courtney</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Human Resources Director</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92258 post-92258 authors type-authors status-publish has-post-thumbnail hentry category-admin business-unit-alliance-recovery business-unit-california-detox business-unit-connections-mental-health business-unit-gratitude-lodge business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/2832970b8e46ad20c6d14a85ff60083d.webp" alt="Alijah Lott RR Human Resources Coordinator.webp" className="attachment-full size-full wp-image-103947" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/human-resources-coordinator-bio-alijah-lott/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Alijah</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Lott</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Human Resources CoordinatorB.S
                                    <br />
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://alliancerecovery.com/" className="business-unit-pill alliance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/ar-logo-icon.svg" alt="Alliance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://californiadetox.com/" className="business-unit-pill california-detox-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/cad-logo-icon.svg" alt="California Detox" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://connectionsoc.com/" className="business-unit-pill connections-mental-health-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/coc-logo-icon.svg" alt="Connections Mental Health" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="http://gratitudelodge.com/" className="business-unit-pill gratitude-lodge-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/gl-logo-icon.svg" alt="Gratitude Lodge" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor elementor-103459 e-loop-item e-loop-item-92305 post-92305 authors type-authors status-publish has-post-thumbnail hentry category-admin business-unit-renaissance-recovery intent-high topic-staff">
                        <div className="elementor-element elementor-element-536f3889 e-con-full author-card team-member e-transform e-flex e-con e-child">
                          <div className="elementor-element elementor-element-615ef0ff e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-9370d74 e-con-full top-content-area e-flex e-con e-child">
                              <div className="elementor-element elementor-element-ac242d6 elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/e99024feebaa603760c6e8fb1a1ef7df.webp" alt="nicholas rodriguez client advocate renaissance recovery florida blue background blue background 1.webp 1" className="attachment-full size-full wp-image-103971" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ef06e66 team-name-sty elementor-headline--style-highlight elementor-widget elementor-widget-animated-headline">
                                <div className="elementor-widget-container">
                                  <Link href="/authors/staff-client-advocate-rr-fl-bio-nicholas-rodriguez/">
                                    <h3 className="elementor-headline e-animated">
                                      <span className="elementor-headline-plain-text elementor-headline-text-wrapper">Nicholas</span>
                                      <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                        <span className="elementor-headline-dynamic-text elementor-headline-text-active">Rodriguez</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true">
                                          <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                                        </svg>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3c273ef7 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">Client Advocate (Florida)</h3>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-9a91ab3 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-6115d9e4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-58a26ab5 designation-certification-heading elementor-widget elementor-widget-heading">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Business Units</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-721ad674 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div className="author-business-units-wrapper">
                                      <a href="https://renaissancerecovery.com/" className="business-unit-pill renaissance-recovery-unit-pill" rel="nofollow noopener" target="_blank">
                                        <img loading="lazy" src="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-content/uploads/2026/02/rr-logo-icon.svg" alt="Renaissance Recovery" className="business-unit-icon" style={{maxWidth: "100%", height: "auto"}} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="e-load-more-spinner">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-19e0686 e-con-full e-flex e-con e-parent e-lazyloaded">
              <div className="elementor-element elementor-element-61fb1bb elementor-widget elementor-widget-template">
                <div className="elementor-widget-container">
                  <div className="elementor-template">
                    <div className="elementor elementor-3115">
                      <div className="elementor-element elementor-element-19ac283e e-flex e-con-boxed e-con e-parent e-lazyloaded">
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-99e3248 e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-1d685b1c e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-67eeeeb2 e-con-full e-flex e-con e-child">
                                <div className="elementor-element elementor-element-2a7885a1 elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">Contact Us</h2>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-52faab38 elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">We're Here to Help Day or Night</h2>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-1c92a7b2 elementor-widget elementor-widget-text-editor">
                                  <div className="elementor-widget-container">
                                    <p>Whether you’re seeking help for yourself or a loved one, our admissions team is available 24/7 to answer your questions and guide you toward the right care.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-1b744bfd elementor-widget elementor-widget-image">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" src="/images/b0cf47b74179424400976fde23c4e476.webp" alt="Frame 840 1" className="attachment-full size-full wp-image-146" style={{maxWidth: "100%", height: "auto"}} />
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-7d76f483 e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-3e2aafc8 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-html">
                                <div className="elementor-widget-container">
                                  <iframe loading="lazy" id="JotFormIFrame-252953870854469" title="TDRC New Design Insurance Form" allowTransparency allow="geolocation; microphone; camera; fullscreen; payment" src="https://form.jotform.com/252953870854469?isIframeEmbed=1" style={{minWidth:"100%",maxWidth:"100%",border:"none",height:"700px"}}></iframe>
                                  <WidgetScript src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
                                  <Script id="inline-script-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.addEventListener("widgetScriptLoaded",function(){window.jotformEmbedHandler("iframe[id='JotFormIFrame-252953870854469']", "https://form.jotform.com/")},{once:true});` }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout3>
  );
}
