import './LogoBelt.css';

const logos = [
  { name: 'Sylvan Woods',   tag: 'Architecture' },
  { name: 'Atelier Co',     tag: 'Interiors' },
  { name: 'Lumina Group',   tag: 'Real Estate' },
  { name: 'Oak & Ember',    tag: 'Studio' },
  { name: 'Verdant Build',  tag: 'Construction' },
  { name: 'Meridian Arch',  tag: 'Design' },
  { name: 'Crestwood Co',   tag: 'Development' },
  { name: 'Forma Studio',   tag: 'Architecture' },
];

const LogoBelt = () => {
  // Duplicate for seamless infinite scroll
  const items = [...logos, ...logos];

  return (
    <div className="logo-belt" aria-label="Our Clients">
      <div className="logo-belt__track">
        {items.map((logo, i) => (
          <div className="logo-belt__item" key={i}>
            <span className="logo-belt__name">{logo.name}</span>
            <span className="logo-belt__sep">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBelt;
