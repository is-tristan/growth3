import styles from "@/styles/pages/policy.module.scss";
import Header from "@/components/global/header";

export default function PrivacyPolicy() {

    return (

        <>

            <Header />

            <div className="row smallBanner centered">

                <div className="wrapper">

                    <div className="heading">

                        <h1>Privacy Policy</h1>

                        <p>Please align yourself with our privacy policy.</p>

                    </div>

                </div>

            </div>

            <div className="row">

                <div className={styles.wrapper}>

                    <strong>Effective Date: 24/10/2024</strong>

                    <br />

                    <p>At Growth3 (“we,” “our,” or “us”), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect personal information submitted through our website growth3.co (the “Site”).</p>

                    <br />

                    <p>By using the Site, you agree to the collection and use of information in accordance with this policy.</p>

                    <br />

                    <h2>1. Information We Collect</h2>

                    <p>We collect personal information when you submit it through our contact form. The information includes:</p>

                    <ul>

                        <li>First Name</li>

                        <li>Email Address</li>

                        <li>Message</li>

                    </ul>

                    <br />

                    <h2>2. How We Use Your Information</h2>

                    <p>We use the personal information you provide for the following purposes:</p>

                    <ul>

                        <li>To respond to your inquiries or messages.</li>

                        <li>To improve our services and the user experience on the Site. </li>

                        <li>To communicate with you, if necessary, based on your submitted request. </li>

                    </ul>

                    <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>

                    <br />

                    <h2>3. Data Retention</h2>

                    <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. If you would like your information deleted, please contact us at hi@growth3.co.</p>

                    <br />

                    <h2>4. Sharing Your Information</h2>

                    <p>We will only share your personal information if:</p>

                    <ul>

                        <li>We are required to do so by law or legal process.</li>

                        <li>It is necessary to protect our legal rights or comply with a legal obligation.</li>

                    </ul>

                    <br />

                    <h2>5. Data Security</h2>

                    <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based service is entirely secure, and we cannot guarantee the absolute security of your data.</p>

                    <br />

                    <h2>6. Your Rights</h2>

                    <p>Depending on your location, you may have the following rights regarding your personal information:</p>

                    <ul>

                        <li>The right to access the data we hold about you.</li>

                        <li>The right to request corrections or updates to your information.</li>

                        <li>The right to request the deletion of your information.</li>

                    </ul>

                    <p>To exercise any of these rights, contact us at hi@growth3.co</p>

                    <br />

                    <h2>7. Changes to This Privacy Policy</h2>

                    <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by posting the new policy on this page. Please review this policy periodically to stay informed about how we are protecting your information.</p>

                    <br />

                    <h2>8. Contact Us</h2>

                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>

                    <br />

                    <p><strong>Email:</strong> hi@growth3.co</p>

                </div>

            </div>

        </>

    );

}