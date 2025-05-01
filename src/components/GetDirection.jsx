import React from 'react';

const GetDirection = () => {
    return (
        <section className="w-full">
            <h2
            className="text-4xl md:text-5xl text-center font-bold mb-8"
            style={{ fontFamily: "Expend Bold" }}
          >
            Get Direction
          </h2>
            <div className="h-[400px] w-full overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.713594412587!2d-83.04553522489564!3d42.433830830439156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d19968382e09%3A0xca0fc20c57252288!2sLou&#39;s%20Coney%20Island!5e0!3m2!1sen!2sbd!4v1746064725157!5m2!1sen!2sbd" 
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location of Lou's Coney Island"
                />
            </div>
        </section>
    );
};

export default GetDirection;