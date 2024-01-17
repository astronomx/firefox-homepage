export default function Weather() {
  return (
    <div className="mt-5 flex flex-col sm:flex-row md:absolute justify-center bottom-10 left-auto md:bottom-5 right-5">
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
