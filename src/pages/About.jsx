import "./About.css";

export default function About() {
    return (
        <div className="about-page">

            <div className="about-hero">
                <h1>About Our Store</h1>
                <p>We bring you the best products at the best prices. Simple, fast, and reliable shopping — that's our promise.</p>
            </div>

            <div className="about-features">
                <div className="about-feature-card">

                    <h3>Free Shipping</h3>
                    <p>Free delivery on all orders over $50. No hidden fees, no surprises.</p>
                </div>
                <div className="about-feature-card">

                    <h3>Easy Returns</h3>
                    <p>Not happy? Return any item within 30 days for a full refund.</p>
                </div>
                <div className="about-feature-card">
                    <h3>Secure Payment</h3>
                    <p>Your payment info is always safe and encrypted.</p>
                </div>
            </div>

            <div className="about-contact">
                <h3>Get in Touch</h3>
                <p>Email: <a href="chanpheakdey@gmail.com">chanpheakdey@gmail.com</a></p>
                <p>Phone: 09999999999</p>
            </div>

        </div>
    );
}
