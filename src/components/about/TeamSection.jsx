import TeamMemberCard from "@components/about/TeamMemberCard";

function TeamSection({ title, members }) {
  return (
    <div className="py-8">
      <h3 className="font-heading text-5xl md:text-7xl text-white text-center mb-8">{title}</h3>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
