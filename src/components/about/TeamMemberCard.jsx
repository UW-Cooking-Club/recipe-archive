function TeamMemberCard({ name, role, image }) {
  return (
    <div className="text-center w-48">
      <div className="relative inline-block">
        {/* Polaroid-style frame */}
        <div className="bg-white p-2 pb-8 shadow-md rotate-[-2deg] hover:rotate-0 transition-transform">
          <img src={image} alt={name} className="w-36 h-36 object-cover" />
        </div>
      </div>
      <p className="font-body text-white text-sm font-semibold mt-2">{name}</p>
      <p className="font-body text-gray-300 text-xs">{role}</p>
    </div>
  );
}

export default TeamMemberCard;
