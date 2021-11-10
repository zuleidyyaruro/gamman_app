import React from 'react';

const Footer = () => {
    return (
        <div>
            <section class="footer_banner" id="contact">
                <p class="footer_text">Siganos en nuestras redes: </p>

                <a class="btn btn-primary" href="https://www.instagram.com/Alixon/" role="button">
                    <i class="fa fa-instagram"></i></a>

                <a class="btn btn-primary" href="https://www.linkedin.com/in/Alixon" role="button">
                    <i class="fa fa-linkedin"></i></a>

                <a class="btn btn-primary" href="https://twitter.com/Alixon" role="button">
                    <i class="fa fa-twitter"></i></a>

            </section>
            {/* Copyrights Section */}
            <div class="copyright">&copy;2021-G5-82</div>
        </div>
    )
}

export default Footer;
