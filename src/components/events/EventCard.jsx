function EventCard({ name, description, date, image }) {
  return (
    <div className="text-center">
      <div className="relative overflow-hidden rounded">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-dark/70 px-3 py-2">
          <h3 className="font-heading text-lg text-white">{name}</h3>
          <p className="font-body text-xs text-gray-300 mt-1">{description}</p>
        </div>
      </div>
      <p className="font-body text-sm text-gray-dark mt-2">{date}</p>
    </div>
  );
}

export default EventCard;
