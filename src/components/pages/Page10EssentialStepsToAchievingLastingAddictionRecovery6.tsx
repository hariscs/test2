import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout6 from '../layouts/Layout-6';

export default function DistrictBehavioralHealth() {
  return (
    <Layout6>
      <div id="content" className="site-main post-1047 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
        <div className="page-header">
          <h1 className="entry-title">10 Essential Steps to Achieving Lasting Addiction Recovery</h1>
        </div>
        <div className="page-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit.</p>
        </div>
        <section id="comments" className="comments-area">
          <div id="respond" className="comment-respond">
            <h2 id="reply-title" className="comment-reply-title">
              Leave a Reply
              <small>
                <Link href="/10-essential-steps-to-achieving-lasting-addiction-recovery-6/#respond" rel="nofollow" id="cancel-comment-reply-link">Cancel reply</Link>
              </small>
            </h2>
            <form action="https://wordpress-1444306-6432440.cloudwaysapps.com/wp-comments-post.php" method="post" id="commentform" className="comment-form">
              <p className="comment-notes">
                <span id="email-notes">Your email address will not be published.</span>
                <span className="required-field-message">
                  Required fields are marked
                  <span className="required">*</span>
                </span>
              </p>
              <p className="comment-form-comment">
                <label htmlFor="comment">
                  Comment
                  <span className="required">*</span>
                </label>
                <textarea id="comment" name="comment" cols={45} rows={8} maxLength={65525} required></textarea>
              </p>
              <p className="comment-form-author">
                <label htmlFor="author">
                  Name
                  <span className="required">*</span>
                </label>
                <input id="author" name="author" type="text" defaultValue="" size={30} maxLength={245} autoComplete="name" required />
              </p>
              <p className="comment-form-email">
                <label htmlFor="email">
                  Email
                  <span className="required">*</span>
                </label>
                <input id="email" name="email" type="text" defaultValue="" size={30} maxLength={100} aria-describedby="email-notes" autoComplete="email" required />
              </p>
              <p className="comment-form-url">
                <label htmlFor="url">Website</label>
                <input id="url" name="url" type="text" defaultValue="" size={30} maxLength={200} autoComplete="url" />
              </p>
              <p className="comment-form-cookies-consent">
                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
              </p>
              <p className="form-submit">
                <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                <input type="hidden" name="comment_post_ID" value="1047" id="comment_post_ID" />
                <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
              </p>
            </form>
          </div>
        </section>
      </div>
    </Layout6>
  );
}
