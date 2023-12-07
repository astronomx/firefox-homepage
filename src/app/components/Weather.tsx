export default function Weather() {
    return (
      <div className="absolute z-0 top-5 left-5">
        <div style={{ maxWidth: 500 }}>
          <iframe
            title="widget"
            className="rounded-3xl"
            width="100%"
            height="300px"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            src="https://www.weeronline.nl/widget/weather?id=4058348"
          ></iframe>
        </div>
      </div>
    );
  }
  