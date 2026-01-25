export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Patience Okon",
      avatar: "/avatars/amina.jpg", // Replace with real image URLs or placeholders
      quote:
        "This store exceeded my expectations. Quality is top-notch and delivery was quick.",
      title: "Verified Buyer",
    },
    {
      id: 2,
      name: "Blessing Adebayo",
      avatar: "/avatars/john.jpg",
      quote:
        "Affordable prices and genuine products. I highly recommend UnifyStore.",
      title: "Returning Customer",
    },
    {
      id: 3,
      name: "Daniel Eze",
      avatar: "/avatars/ngozi.jpg",
      quote:
        "From browsing to delivery, everything was seamless. Great experience overall.",
      title: "Satisfied Customer",
    },
  ];

  return (
    // <section className="bg-gray-50 py-16 px-6 text-center rounded-lg max-w-7xl mx-auto">
    <section className="bg-gray-50 py-8 md:py-16 px-4 md:px-6 text-center rounded-lg max-w-7xl mx-auto">
      {/* <h2 className="text-4xl font-bold mb-10 text-gray-900"> */}
      <h2 className="text-xl md:text-4xl font-bold mb-10 text-gray-900 px-5">
        What Our Customers Say About Us
      </h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ id, name, avatar, quote, title }) => (
          <div
            key={id}
            className="bg-white shadow-sm rounded-lg p-6 max-w-sm mx-auto md:mx-0 flex flex-col justify-between"
          >
            <p className="text-gray-700 italic mb-4">&quot;{quote}&quot;</p>
            <div className="">
              {/* <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
              /> */}
              <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
