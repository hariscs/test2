import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout2 from '../layouts/Layout-2';
import Script from 'next/script';
import WidgetScript from '@/components/WidgetScript';

const gridData0 = [
  {
    "title": "Step 1",
    "description": "Tell Us About Yourself",
    "text2": "Everyone’s situation is different. Call our admissions team 24/7 to share your story and start the treatment process.",
    "image": "/images/c0f3acd4ed975b18b7bf51331d4f1b9b.webp"
  },
  {
    "title": "Step 2",
    "description": "Complete the Evaluation Process",
    "text2": "Our admissions specialist will ask about your substance use, mental health, medical history, and insurance to determine the best treatment approach.",
    "image": "/images/bfbb070496956dd6daf261967a9d7974.webp"
  },
  {
    "title": "Step 3",
    "description": "Plan Your Admission",
    "text2": "After your evaluation and approval, we will schedule your admission date and confirm program availability.",
    "image": "/images/39f3738d158bde5c6d6dd69b7f637688.webp"
  },
  {
    "title": "Step 4",
    "description": "Travel and Arrive at the Facility",
    "text2": "We’ll continue coordinating with you as you pack for treatment and ensure you are going to make your travel arrangements with no problems.",
    "image": "/images/ccb1d2ee122cfb633d67d9f4cc7dbc7c.webp"
  },
  {
    "title": "Step 5",
    "description": "Begin Your Treatment",
    "text2": "Your recovery starts with a personalized treatment plan that may include therapy, medication support, and relapse prevention.",
    "image": "/images/275ba780e2690f5e665cb57112f8d918.webp"
  }
] as const;


export default function RehabAdmission(props: Record<string, string>) {
  const phone = props.phone ?? "888-707-6073";
  const address_county = props.address_county ?? "Orange County";
  return (
    <Layout2>
      <div id="content" className="site-main post-103977 page type-page status-publish hentry">
        <div className="page-header">
          <h1 className="entry-title">Rehab Admission</h1>
        </div>
        <div className="page-content">
          <div className="elementor elementor-103977">
            <div className="elementor-element elementor-element-90e9017 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-f509614 elementor-widget-mobile__width-auto elementor-absolute elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <link rel="preload" as="image" href="/images/8b15cf55269d803754c7ea1986b1a7bc.webp" fetchPriority="high" /><img fetchPriority="high" src="/images/8b15cf55269d803754c7ea1986b1a7bc.webp" alt="banner left iconpng" className="attachment-full size-full wp-image-103266" style={{maxWidth: "100%", height: "auto"}} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-d048b52 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-4d0fc6a elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">Your Journey to Recovery Starts Here</h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-9f7b647 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p>At District Behavioral Health, our admissions counselors educate you or your loved one on how simple the admissions process can be. Our goal is to make the rehab admissions process as easy as possible so you or your loved ones can find the right treatment suited to your needs. We walk with you on your journey to sobriety.</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-098e0af e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-0ab130e elementor-align-left elementor-widget-mobile__width-inherit e-transform elementor-mobile-align-justify elementor-widget elementor-widget-button">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="/" className="elementor-button elementor-button-link elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12H5M19 12L12 19M19 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                                <span className="elementor-button-text">Get Started</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-b4be985 elementor-align-left elementor-widget-mobile__width-inherit e-transform elementor-mobile-align-justify elementor-widget elementor-widget-button">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="tel:888-707-6073" className="elementor-button elementor-button-link elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">{phone}</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f08d794 elementor-absolute elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <img loading="lazy" src="/images/c17742afe995bd985148217517f9ecef.webp" alt="banner right icon" className="attachment-full size-full wp-image-103267" style={{maxWidth: "100%", height: "auto"}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-27f0ae6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7035475 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">How Admissions Works</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-bb1318e elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">We’ve streamlined our process to remove barriers to treatment. Four simple steps stand between you and a new life.</div>
                </div>
                <div className="elementor-element elementor-element-28b3d1c e-con-full e-flex e-con e-child">
                  {gridData0.map((item, i) => (
                    <div key={i} className="elementor-element elementor-element-69644ae e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-a83bb93 elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">{item.title}</h4>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-4f4d8f1 elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">{item.description}</h3>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-799bb44 elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container">
                          <p>{item.text2}</p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-592360b elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <img loading="lazy" src={item.image} alt="salesgirl on laptop" className="attachment-full size-full wp-image-103981" style={{maxWidth: "100%", height: "auto"}} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ebe547a e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-1afcb48 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-ec76e1e elementor-widget elementor-widget-google_maps">
                    <div className="elementor-widget-container">
                      <div className="elementor-custom-embed">
                        <iframe loading="lazy" src="https://maps.google.com/maps?q=10175+Slater+Ave+Ste+200%2C+Fountain+Valley%2C+CA+92708&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="10175 Slater Ave Ste 200, Fountain Valley, CA 92708" aria-label="10175 Slater Ave Ste 200, Fountain Valley, CA 92708" style={{minWidth:"100%",maxWidth:"100%",border:"none",height:"700px"}}></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-877ca54 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-946a2e8 elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Treatment Access and Facility Availability in {address_county}</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-cb410f9 elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <p>Across the nation, drug use is prevalent, but based on state stats {address_county}, CA has a higher rate of drug abuse at 10.47% compared to the national average of 8.82%.</p>
                      <p>Here are the stats on drug use in {address_county}, CA:</p>
                      <ul>
                        <li>{address_county} coastal cities, have a higher rate of emergency room visits as compared to non-coastal OC cities.</li>
                        <li>{address_county} has seen a staggering 34% jump in mortality rates related to drug use from 2019 to 2020.</li>
                        <li>{address_county} is in the top 25% of the counties in CA based on the highest hospitalization rates due to alcohol or drug use.</li>
                        <li>In 2025, the most commonly abused drug in {address_county} is cocaine.</li>
                      </ul>
                      <p>Despite these statistics, there is treatment available to combat drug and alcohol addiction. Renaissance Recovery’s {address_county} rehab is here to help you break free from addiction. Through science-backed, compassionate treatment, we’ll help guide you on your recovery journey so you don’t become a part of these statistics. Begin a life of sobriety at Renaissance Recovery.</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e78a728 elementor-align-left elementor-widget-mobile__width-inherit e-transform elementor-mobile-align-justify elementor-widget elementor-widget-button">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <Link href="/" className="elementor-button elementor-button-link elementor-size-sm">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Verify Your Insurance</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-38a6332 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-4ce9c2f e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-28180e1 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-5ef87cf e-flex e-con-boxed e-con e-child">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-9c826b0 elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Contact Us</h2>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-9754bca elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">We're Here to Help Day or Night</h2>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-cb27416 elementor-widget elementor-widget-text-editor">
                          <div className="elementor-widget-container">
                            <p>Whether you’re seeking help for yourself or a loved one, our admissions team is available 24/7 to answer your questions and guide you toward the right care.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0f23545 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/b0cf47b74179424400976fde23c4e476.webp" alt="Frame 840 1" className="attachment-full size-full wp-image-146" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a190554 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-9086a1f elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-html">
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
    </Layout2>
  );
}
