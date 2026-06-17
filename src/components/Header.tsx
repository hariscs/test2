import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="elementor elementor-26 elementor-location-header">
      <div className="elementor-element elementor-element-c1dc726 elementor-hidden-mobile sticky-header elementor-hidden-tablet elementor-hidden-desktop e-flex e-con-boxed e-con e-parent elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects">
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
                                    <Link title="California Fentanyl Treatment" href="/location-served/usa/psycho-dynamic/">
                                      <span className="unhovered-label">
                                        Fentanyl Treatment 
                                      </span>
                                      <span className="hovered-label">
                                        California Fentanyl Treatment
                                      </span>
                                    </Link>
                                    <Link title="California Ketamine Treatment" href="/location-served/usa/psycho-dynamic/">
                                      <span className="unhovered-label">
                                        Ketamine Treatment 
                                      </span>
                                      <span className="hovered-label">
                                        California Ketamine Treatment
                                      </span>
                                    </Link>
                                    <Link title="California Kratom Treatment" href="/location-served/usa/psycho-dynamic/">
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
      <header className="elementor-element elementor-element-a90dca5 elementor-hidden-tablet elementor-hidden-mobile sticky-header e-flex e-con-boxed e-con e-parent elementor-sticky elementor-sticky--active elementor-section--handles-inside e-lazyloaded elementor-sticky--effects">
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
                                  <Link title="California Fentanyl Treatment" href="/location-served/usa/psycho-dynamic/">
                                    <span className="unhovered-label">
                                      Fentanyl Treatment 
                                    </span>
                                    <span className="hovered-label">
                                      California Fentanyl Treatment
                                    </span>
                                  </Link>
                                  <Link title="California Ketamine Treatment" href="/location-served/usa/psycho-dynamic/">
                                    <span className="unhovered-label">
                                      Ketamine Treatment 
                                    </span>
                                    <span className="hovered-label">
                                      California Ketamine Treatment
                                    </span>
                                  </Link>
                                  <Link title="California Kratom Treatment" href="/location-served/usa/psycho-dynamic/">
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
      <header className="elementor-section elementor-top-section elementor-element elementor-element-2427782 elementor-hidden-desktop sticky-header elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects">
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
  );
}
