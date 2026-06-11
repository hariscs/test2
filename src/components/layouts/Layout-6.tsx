import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function Layout6({ children }: Props) {
  return (
    <>
<header className="elementor elementor-26 elementor-location-header">
  <div className="elementor-element elementor-element-c1dc726 elementor-hidden-mobile sticky-header elementor-hidden-tablet elementor-hidden-desktop e-flex e-con-boxed e-con e-parent elementor-sticky elementor-sticky--active elementor-section--handles-inside">
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-8ba242e e-con-full e-flex e-con e-child">
        <div className="elementor-element elementor-element-70f99d9 elementor-widget elementor-widget-image">
          <div className="elementor-widget-container">
            <Link href="/">
              <img src="/images/f1faadc94271de8231501bda2f1cc1b2.webp" alt="District-Behavioral-Health-Group-Big-Logo-Size" width={840} height={259} className="attachment-full size-full wp-image-430" />
            </Link>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-5a69502 e-con-full e-flex e-con e-child">
        <div className="elementor-element elementor-element-7154470 elementor-hidden-tablet elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-shortcode">
          <div className="elementor-widget-container">
            <div className="navbar">
              <Link href="/" className="main_item">
                Home
              </Link>
              <div className="dropdown menu-item-locations">
                <a className="dropbtn main_item hided-menu-item">
                  Locations 
                </a>
                <div className="dropdown-content">
                  <div className="dropdown-content__inner is-locations-menu">
                    <div className="sub_menu_row">
                      <div className="menu_cta_box">
                        <h4 className="active_dropdown_title">
                          Locations
                        </h4>
                        <div className="menu_cta">
                          <img src="/images/baad72c12360e71c82490b3e14954a4a.webp" alt="" width={1920} height={1014} />
                          <p>
                            Choose from our beautiful locations near beaches & national parks.
                          </p>
                          <Link href="tel:888-707-6073" className="gradient-btn__blue">
                            888-707-6073
                          </Link>
                        </div>
                      </div>
                      <div className="sub_menus_box">
                        <div className="dynamic-content-wrapper">
                          <div className="menus_row">
                            <ul>
                              <li>
                                <Link href="#">
                                  <span className="unhovered-label">
                                    California
                                  </span>
                                  <span className="hovered-label">
                                    California
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu_links active">
                            <div className="menu_links_wrapper">
                              <div className="geo_links">
                                <Link title="California Drug Rehub" href="/?page_id=1752">
                                  <span className="unhovered-label">
                                    Drug Rehub 
                                  </span>
                                  <span className="hovered-label">
                                    California Drug Rehub
                                  </span>
                                </Link>
                                <Link title="California Fentanyl Treatment" href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/">
                                  <span className="unhovered-label">
                                    Fentanyl Treatment 
                                  </span>
                                  <span className="hovered-label">
                                    California Fentanyl Treatment
                                  </span>
                                </Link>
                                <Link title="California Ketamine Treatment" href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/">
                                  <span className="unhovered-label">
                                    Ketamine Treatment 
                                  </span>
                                  <span className="hovered-label">
                                    California Ketamine Treatment
                                  </span>
                                </Link>
                                <Link title="California Kratom Treatment" href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/">
                                  <span className="unhovered-label">
                                    Kratom Treatment 
                                  </span>
                                  <span className="hovered-label">
                                    California Kratom Treatment
                                  </span>
                                </Link>
                              </div>
                              <div className="geo_image_box">
                                <img src="/images/18afbe2d09d55d30c07def668f9880b6.webp" alt="Location Preview" width={720} height={720} className="geo-preview-img" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cta-wrapper__header">
                          <a className="gradient-btn__blue">
                            Areas We Serve
                          </a>
                          <p>
                            Why I should relocate for rehab?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-image-footer">
                      <img src="/images/baad72c12360e71c82490b3e14954a4a.webp" alt="Menu CTA Image" width={1920} height={1014} className="mobile-geo-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown menu-item-treatments-programs">
                <a className="dropbtn main_item ">
                  Treatments Programs 
                </a>
                <div className="dropdown-content">
                  <div className="dropdown-content__inner">
                    <div className="sub_menu_row">
                      <div className="menu_cta_box">
                        <h4 className="active_dropdown_title">
                          Treatments Programs
                        </h4>
                        <div className="menu_cta">
                          <img src="/images/18afbe2d09d55d30c07def668f9880b6.webp" alt="" width={720} height={720} />
                          <p>
                            Get treatment for a wide range of substance use disorders.
                          </p>
                          <Link href="/contact-us/" className="gradient-btn__blue">
                            Contact Us
                          </Link>
                        </div>
                      </div>
                      <div className="sub_menus_box">
                        <div className="dynamic-content-wrapper">
                          <div className="menus_row">
                            <div className="menu_col has-sub-menu">
                              <div className="menu_col_title active ">
                                <Link href="#" className="">
                                  Levels of Care 
                                </Link>
                              </div>
                              <ul>
                                <li>
                                  <Link className="" href="/location-served/usa/outpatient-drug-rehab/">
                                    <span className="unhovered-label">
                                      Outpatient Rehab
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/iop-drug-rehab/">
                                    <span className="unhovered-label">
                                      IOP Rehab
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/php-drug-rehab/">
                                    <span className="unhovered-label">
                                      PHP Rehab
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="menu_col has-sub-menu">
                              <div className="menu_col_title ">
                                <Link href="#" className="">
                                  Therapies 
                                </Link>
                              </div>
                              <ul>
                                <li>
                                  <Link className="" href="/location-served/usa/cbt-therapy/">
                                    <span className="unhovered-label">
                                      CBT Therapy
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/dbt-therapy/">
                                    <span className="unhovered-label">
                                      DBT Therapy
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/emdr-therapy/">
                                    <span className="unhovered-label">
                                      EMDR Therapy
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="menu_col has-sub-menu">
                              <div className="menu_col_title ">
                                <Link href="#" className="">
                                  Programs 
                                </Link>
                              </div>
                              <ul>
                                <li>
                                  <Link className="" href="/location-served/usa/mat-treatment/">
                                    <span className="unhovered-label">
                                      MAT Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/pet-friendly-rehab/">
                                    <span className="unhovered-label">
                                      Pet Friendly Rehab
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/couples-rehab/">
                                    <span className="unhovered-label">
                                      Couples Rehab
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/lgbtq-drug-rehab/">
                                    <span className="unhovered-label">
                                      LGBTQ Rehab
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/dual-diagnosis-treatment/">
                                    <span className="unhovered-label">
                                      Dual Diagnosis Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/sober-living/">
                                    <span className="unhovered-label">
                                      Sober Living Housing
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="menu_links active"></div>
                        </div>
                        <div className="cta-wrapper__header">
                          <a className="gradient-btn__blue">
                            Areas We Serve
                          </a>
                          <p>
                            Why I should relocate for rehab?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-image-footer">
                      <img src="/images/18afbe2d09d55d30c07def668f9880b6.webp" alt="Menu CTA Image" width={720} height={720} className="mobile-geo-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown menu-item-drug-addictions">
                <a className="dropbtn main_item ">
                  Drug Addictions 
                </a>
                <div className="dropdown-content">
                  <div className="dropdown-content__inner">
                    <div className="sub_menu_row">
                      <div className="menu_cta_box">
                        <h4 className="active_dropdown_title">
                          Drug Addictions
                        </h4>
                        <div className="menu_cta">
                          <img src="/images/b0fc9644d649140ae70094de8857e951.webp" alt="" width={561} height={841} />
                          <p>
                            Get treatment for a wide range of substance use disorders.
                          </p>
                          <Link href="/contact-us/" className="gradient-btn__blue">
                            Check Insurance Coverage
                          </Link>
                        </div>
                      </div>
                      <div className="sub_menus_box">
                        <div className="dynamic-content-wrapper">
                          <div className="menus_row">
                            <div className="menu_col has-sub-menu">
                              <div className="menu_col_title active ">
                                <Link href="#" className="">
                                  Types of Drugs Treated 
                                </Link>
                              </div>
                              <ul>
                                <li>
                                  <Link className="" href="/location-served/usa/meth-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Meth Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/cocaine-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Cocaine Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/fentanyl-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Fentanyl Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/marijuana-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Marijuana Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/kratom-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Kratom Treatment
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="menu_col has-sub-menu">
                              <div className="menu_col_title ">
                                <Link href="#" className="">
                                  Types of Drugs Treated 
                                </Link>
                              </div>
                              <ul>
                                <li>
                                  <Link className="" href="/location-served/usa/ketamine-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Ketamine Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/benzo-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Benzo Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/nitazene-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Nitazene Treatment
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="" href="/location-served/usa/xanax-addiction-treatment/">
                                    <span className="unhovered-label">
                                      Xanax Treatment
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="menu_links active"></div>
                        </div>
                        <div className="cta-wrapper__header">
                          <a className="gradient-btn__blue">
                            Areas We Serve
                          </a>
                          <p>
                            Why I should relocate for rehab?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-image-footer">
                      <img src="/images/b0fc9644d649140ae70094de8857e951.webp" alt="Menu CTA Image" width={561} height={841} className="mobile-geo-img" />
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/contact-us/" className="main_item">
                Contact Us
              </Link>
            </div>
            <div className="elementor-shortcode"></div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-1ed8339 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child">
        <div className="elementor-element elementor-element-6ebdd9a elementor-align-right elementor-widget elementor-widget-button">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <Link className="elementor-button elementor-button-link elementor-size-sm" href="tel:888-707-6073">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">
                    (888) 707-6073
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header className="elementor-element elementor-element-a90dca5 elementor-hidden-tablet elementor-hidden-mobile sticky-header e-flex e-con-boxed e-con e-parent e-lazyloaded elementor-sticky elementor-sticky--active elementor-section--handles-inside">
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-33ebb35 this-logo-sticky elementor-widget elementor-widget-image">
        <div className="elementor-widget-container">
          <Link href="/">
            <img src="/images/f1faadc94271de8231501bda2f1cc1b2.webp" alt="District-Behavioral-Health-Group-Big-Logo-Size" width={840} height={259} className="attachment-full size-full wp-image-430" />
          </Link>
        </div>
      </div>
      <div className="elementor-element elementor-element-bf044ab elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-shortcode">
        <div className="elementor-widget-container">
          <div className="navbar">
            <Link href="/" className="main_item">
              Home
            </Link>
            <div className="dropdown menu-item-locations">
              <a className="dropbtn main_item hided-menu-item">
                Locations 
              </a>
              <div className="dropdown-content">
                <div className="dropdown-content__inner is-locations-menu">
                  <div className="sub_menu_row">
                    <div className="menu_cta_box">
                      <h4 className="active_dropdown_title">
                        Locations
                      </h4>
                      <div className="menu_cta">
                        <img src="/images/baad72c12360e71c82490b3e14954a4a.webp" alt="" width={1920} height={1014} />
                        <p>
                          Choose from our beautiful locations near beaches & national parks.
                        </p>
                        <Link href="tel:888-707-6073" className="gradient-btn__blue">
                          888-707-6073
                        </Link>
                      </div>
                    </div>
                    <div className="sub_menus_box">
                      <div className="dynamic-content-wrapper">
                        <div className="menus_row">
                          <ul>
                            <li>
                              <Link href="#">
                                <span className="unhovered-label">
                                  California
                                </span>
                                <span className="hovered-label">
                                  California
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="menu_links active">
                          <div className="menu_links_wrapper">
                            <div className="geo_links">
                              <Link title="California Drug Rehub" href="/?page_id=1752">
                                <span className="unhovered-label">
                                  Drug Rehub 
                                </span>
                                <span className="hovered-label">
                                  California Drug Rehub
                                </span>
                              </Link>
                              <Link title="California Fentanyl Treatment" href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/">
                                <span className="unhovered-label">
                                  Fentanyl Treatment 
                                </span>
                                <span className="hovered-label">
                                  California Fentanyl Treatment
                                </span>
                              </Link>
                              <Link title="California Ketamine Treatment" href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/">
                                <span className="unhovered-label">
                                  Ketamine Treatment 
                                </span>
                                <span className="hovered-label">
                                  California Ketamine Treatment
                                </span>
                              </Link>
                              <Link title="California Kratom Treatment" href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/">
                                <span className="unhovered-label">
                                  Kratom Treatment 
                                </span>
                                <span className="hovered-label">
                                  California Kratom Treatment
                                </span>
                              </Link>
                            </div>
                            <div className="geo_image_box">
                              <img src="/images/18afbe2d09d55d30c07def668f9880b6.webp" alt="Location Preview" width={720} height={720} className="geo-preview-img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper__header">
                        <a className="gradient-btn__blue">
                          Areas We Serve
                        </a>
                        <p>
                          Why I should relocate for rehab?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-image-footer">
                    <img src="/images/baad72c12360e71c82490b3e14954a4a.webp" alt="Menu CTA Image" width={1920} height={1014} className="mobile-geo-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown menu-item-treatments-programs">
              <a className="dropbtn main_item ">
                Treatments Programs 
              </a>
              <div className="dropdown-content">
                <div className="dropdown-content__inner">
                  <div className="sub_menu_row">
                    <div className="menu_cta_box">
                      <h4 className="active_dropdown_title">
                        Treatments Programs
                      </h4>
                      <div className="menu_cta">
                        <img src="/images/18afbe2d09d55d30c07def668f9880b6.webp" alt="" width={720} height={720} />
                        <p>
                          Get treatment for a wide range of substance use disorders.
                        </p>
                        <Link href="/contact-us/" className="gradient-btn__blue">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                    <div className="sub_menus_box">
                      <div className="dynamic-content-wrapper">
                        <div className="menus_row">
                          <div className="menu_col has-sub-menu">
                            <div className="menu_col_title active ">
                              <Link href="#" className="">
                                Levels of Care 
                              </Link>
                            </div>
                            <ul>
                              <li>
                                <Link className="" href="/location-served/usa/outpatient-drug-rehab/">
                                  <span className="unhovered-label">
                                    Outpatient Rehab
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/iop-drug-rehab/">
                                  <span className="unhovered-label">
                                    IOP Rehab
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/php-drug-rehab/">
                                  <span className="unhovered-label">
                                    PHP Rehab
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu_col has-sub-menu">
                            <div className="menu_col_title ">
                              <Link href="#" className="">
                                Therapies 
                              </Link>
                            </div>
                            <ul>
                              <li>
                                <Link className="" href="/location-served/usa/cbt-therapy/">
                                  <span className="unhovered-label">
                                    CBT Therapy
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/dbt-therapy/">
                                  <span className="unhovered-label">
                                    DBT Therapy
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/emdr-therapy/">
                                  <span className="unhovered-label">
                                    EMDR Therapy
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu_col has-sub-menu">
                            <div className="menu_col_title ">
                              <Link href="#" className="">
                                Programs 
                              </Link>
                            </div>
                            <ul>
                              <li>
                                <Link className="" href="/location-served/usa/mat-treatment/">
                                  <span className="unhovered-label">
                                    MAT Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/pet-friendly-rehab/">
                                  <span className="unhovered-label">
                                    Pet Friendly Rehab
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/couples-rehab/">
                                  <span className="unhovered-label">
                                    Couples Rehab
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/lgbtq-drug-rehab/">
                                  <span className="unhovered-label">
                                    LGBTQ Rehab
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/dual-diagnosis-treatment/">
                                  <span className="unhovered-label">
                                    Dual Diagnosis Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/sober-living/">
                                  <span className="unhovered-label">
                                    Sober Living Housing
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="menu_links active"></div>
                      </div>
                      <div className="cta-wrapper__header">
                        <a className="gradient-btn__blue">
                          Areas We Serve
                        </a>
                        <p>
                          Why I should relocate for rehab?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-image-footer">
                    <img src="/images/18afbe2d09d55d30c07def668f9880b6.webp" alt="Menu CTA Image" width={720} height={720} className="mobile-geo-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown menu-item-drug-addictions">
              <a className="dropbtn main_item ">
                Drug Addictions 
              </a>
              <div className="dropdown-content">
                <div className="dropdown-content__inner">
                  <div className="sub_menu_row">
                    <div className="menu_cta_box">
                      <h4 className="active_dropdown_title">
                        Drug Addictions
                      </h4>
                      <div className="menu_cta">
                        <img src="/images/b0fc9644d649140ae70094de8857e951.webp" alt="" width={561} height={841} />
                        <p>
                          Get treatment for a wide range of substance use disorders.
                        </p>
                        <Link href="/contact-us/" className="gradient-btn__blue">
                          Check Insurance Coverage
                        </Link>
                      </div>
                    </div>
                    <div className="sub_menus_box">
                      <div className="dynamic-content-wrapper">
                        <div className="menus_row">
                          <div className="menu_col has-sub-menu">
                            <div className="menu_col_title active ">
                              <Link href="#" className="">
                                Types of Drugs Treated 
                              </Link>
                            </div>
                            <ul>
                              <li>
                                <Link className="" href="/location-served/usa/meth-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Meth Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/cocaine-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Cocaine Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/fentanyl-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Fentanyl Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/marijuana-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Marijuana Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/kratom-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Kratom Treatment
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu_col has-sub-menu">
                            <div className="menu_col_title ">
                              <Link href="#" className="">
                                Types of Drugs Treated 
                              </Link>
                            </div>
                            <ul>
                              <li>
                                <Link className="" href="/location-served/usa/ketamine-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Ketamine Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/benzo-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Benzo Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/nitazene-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Nitazene Treatment
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link className="" href="/location-served/usa/xanax-addiction-treatment/">
                                  <span className="unhovered-label">
                                    Xanax Treatment
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="menu_links active"></div>
                      </div>
                      <div className="cta-wrapper__header">
                        <a className="gradient-btn__blue">
                          Areas We Serve
                        </a>
                        <p>
                          Why I should relocate for rehab?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-image-footer">
                    <img src="/images/b0fc9644d649140ae70094de8857e951.webp" alt="Menu CTA Image" width={561} height={841} className="mobile-geo-img" />
                  </div>
                </div>
              </div>
            </div>
            <Link href="/contact-us/" className="main_item">
              Contact Us
            </Link>
          </div>
          <div className="elementor-shortcode"></div>
        </div>
      </div>
      <div className="elementor-element elementor-element-937472e elementor-align-right menu-cta elementor-widget elementor-widget-button">
        <div className="elementor-widget-container">
          <div className="elementor-button-wrapper">
            <Link className="elementor-button elementor-button-link elementor-size-sm" href="tel:888-707-6073">
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">
                  (888) 707-6073
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header className="elementor-section elementor-top-section elementor-element elementor-element-2427782 elementor-hidden-desktop sticky-header elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--active elementor-section--handles-inside">
    <div className="elementor-container elementor-column-gap-default">
      <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-589db17">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-ede5212 this-logo-sticky elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <Link href="/">
                <img src="/images/f1faadc94271de8231501bda2f1cc1b2.webp" alt="District-Behavioral-Health-Group-Big-Logo-Size" width={840} height={259} className="attachment-full size-full wp-image-430" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-819cba6">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-dc5d096 menu-cta elementor-hidden-mobile elementor-align-right elementor-widget elementor-widget-button">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <Link className="elementor-button elementor-button-link elementor-size-sm" href="/contact">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">
                      Contact Us
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ac2e9fe">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-ea9b3f3 menu-cta elementor-view-default elementor-widget elementor-widget-icon">
            <div className="elementor-widget-container">
              <div className="elementor-icon-wrapper">
                <Link className="elementor-icon" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE4MjEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-bars" viewBox="0 0 448 512">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</header>
      {children}
<footer className="elementor elementor-117 elementor-location-footer">
  <div className="elementor-element elementor-element-f7771bd e-flex e-con-boxed e-con e-parent e-lazyloaded">
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-8ac0bb4 e-con-full e-flex e-con e-child">
        <div className="elementor-element elementor-element-34475cf e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-1f1a7ab elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <img src="/images/395675a0a6af2a6e9c2edc890456f5d7.webp" alt="" width={247} height={58} className="attachment-full size-full wp-image-32" />
            </div>
          </div>
          <div className="elementor-element elementor-element-d311276 elementor-widget elementor-widget-text-editor">
            <div className="elementor-widget-container">
              <p>
                The District Behavioral Health Group is a network of trusted, accredited treatment centers helping individuals overcome addiction and mental health challenges.
              </p>
            </div>
          </div>
          <div className="elementor-element elementor-element-7fdb839 elementor-shape-circle e-grid-align-left e-grid-align-mobile-center elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-grid-0 elementor-widget elementor-widget-social-icons">
            <div className="elementor-widget-container">
              <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                <span className="elementor-grid-item" role="listitem">
                  <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-bcc1624" target="_blank" rel="noopener noreferrer">
                    <span className="elementor-screen-only">
                      Facebook
                    </span>
                    <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item" role="listitem">
                  <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-6176874" target="_blank" rel="noopener noreferrer">
                    <span className="elementor-screen-only">
                      Instagram
                    </span>
                    <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item" role="listitem">
                  <a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-3d3535c" target="_blank" rel="noopener noreferrer">
                    <span className="elementor-screen-only">
                      Youtube
                    </span>
                    <svg aria-hidden="true" className="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item" role="listitem">
                  <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-3da2b8a" target="_blank" rel="noopener noreferrer">
                    <span className="elementor-screen-only">
                      Linkedin-in
                    </span>
                    <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item" role="listitem">
                  <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-dd7d172" target="_blank" rel="noopener noreferrer">
                    <span className="elementor-screen-only">
                      Twitter
                    </span>
                    <svg aria-hidden="true" className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6b48b01 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-2400855 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                Quick Links
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-c2fef40 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
            <div className="elementor-widget-container">
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                  <Link href="#">
                    <span className="elementor-icon-list-text">
                      About
                    </span>
                  </Link>
                </li>
                <li className="elementor-icon-list-item">
                  <Link href="#">
                    <span className="elementor-icon-list-text">
                      Facilities
                    </span>
                  </Link>
                </li>
                <li className="elementor-icon-list-item">
                  <Link href="#">
                    <span className="elementor-icon-list-text">
                      Programs
                    </span>
                  </Link>
                </li>
                <li className="elementor-icon-list-item">
                  <Link href="#">
                    <span className="elementor-icon-list-text">
                      Careers
                    </span>
                  </Link>
                </li>
                <li className="elementor-icon-list-item">
                  <Link href="#">
                    <span className="elementor-icon-list-text">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-9a278a5 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-a8d796e elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                Proudly Accredited
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-144c6fd elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <img src="/images/2140c5beaaa6acf752f085b0740bf21c.webp" alt="" width={656} height={149} className="attachment-full size-full wp-image-118" />
            </div>
          </div>
          <div className="elementor-element elementor-element-9682ed2 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-06e41df elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <a href="https://recovery.com/the-district-recovery-huntington-beach-california/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/495c849620dc87ec22f673b0728d88ed.webp" alt="" width={227} height={103} className="attachment-full size-full wp-image-1250" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-876d646 e-con-full e-flex e-con e-child">
        <div className="elementor-element elementor-element-6247dc7 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-145dc5a elementor-widget elementor-widget-text-editor">
            <div className="elementor-widget-container">
              <p>
                All rights reserved ® Districtbehavioralhealthgroup.com
              </p>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-9be6cab e-con-full elementor-hidden-mobile e-flex e-con e-child">
          <div className="elementor-element elementor-element-3a61439 elementor-icon-list--layout-inline elementor-align-end elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
            <div className="elementor-widget-container">
              <ul className="elementor-icon-list-items elementor-inline-items">
                <li className="elementor-icon-list-item elementor-inline-item">
                  <Link href="/privacy-policy/">
                    <span className="elementor-icon-list-text">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
