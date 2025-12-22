export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Amina Yusuf",
      avatar: "/avatars/amina.jpg", // Replace with real image URLs or placeholders
      quote:
        "Unifystore never disappoints! Great quality and super-fast delivery. Highly recommended!",
      title: "Verified Buyer",
    },
    {
      id: 2,
      name: "John Okafor",
      avatar: "/avatars/john.jpg",
      quote:
        "I love the variety of fashion items here. The customer service is top-notch too.",
      title: "Happy Customer",
    },
    {
      id: 3,
      name: "Ngozi Chukwu",
      avatar: "/avatars/ngozi.jpg",
      quote:
        "Shopping here has been a breeze — easy navigation, smooth checkout, and excellent products.",
      title: "Loyal Shopper",
    },
  ];

  return (
    // <section className="bg-gray-50 py-16 px-6 text-center rounded-lg max-w-7xl mx-auto">
    <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-6 text-center rounded-lg max-w-7xl mx-auto">
      {/* <h2 className="text-4xl font-bold mb-10 text-gray-900"> */}
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-gray-900">
        What Our Customers Say About Us
      </h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ id, name, avatar, quote, title }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0"
          >
            <p className="text-gray-700 italic mb-6">&quot;{quote}&quot;</p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
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
