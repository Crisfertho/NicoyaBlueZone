import Image from "next/image";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Traducciones con ubicaciones
const translations = {
  es: {
    title: "Guía Turística Interactiva",
    toggleButton: {
      satellite: "Ver Mapa Satelital",
      default: "Ver Modo Capas",
    },
    places: [
      {
        id: 1,
        name: "Playa Sámara",
        position: [9.881823, -85.527717],
        description: "Una hermosa playa ideal para surf y relajación.",
        image: "/images/map-icons/Playa-Samara.webp",
        tips: "Visítala durante la puesta de sol para una experiencia inolvidable.",
      },
      {
        id: 2,
        name: "Parque Nacional Barra Honda",
        position: [10.176294, -85.370804],
        description: "Famoso por sus cuevas de piedra caliza.",
        image: "/images/map-icons/Barra-Honda-Caves.webp",
        tips: "Lleva calzado adecuado y prepárate para explorar las cuevas.",
      },
      {
        id: 3,
        name: "Corralillo de Nicoya",
        position: [10.218921, -85.376166],
        description: "Famoso por sus comidas y festivales culturales.",
        image: "/images/map-icons/tortilla.webp",
        tips: "Donde se lleva a cabo el festival de la tortilla.",
      },
      {
        id: 4,
        name: "Nicoya",
        position: [10.142483, -85.4537],
        description: "Famoso por ser una de las 5 zonas azules del mundo.",
        image: "/images/map-icons/Nicoya.webp",
        tips: "Descubre su iglesia colonial y su historia única.",
      },
    ],
  },
  en: {
    title: "Interactive Tourist Guide",
    toggleButton: {
      satellite: "View Satellite Map",
      default: "View Default Layers",
    },
    places: [
      {
        id: 1,
        name: "Samara Beach",
        position: [9.881823, -85.527717],
        description: "A beautiful beach perfect for surfing and relaxation.",
        image: "/images/map-icons/Playa-Samara.webp",
        tips: "Visit during sunset for an unforgettable experience.",
      },
      {
        id: 2,
        name: "Barra Honda National Park",
        position: [10.176294, -85.370804],
        description: "Famous for its limestone caves.",
        image: "/images/map-icons/Barra-Honda-Caves.webp",
        tips: "Wear proper footwear and prepare to explore the caves.",
      },
      {
        id: 3,
        name: "Corralillo de Nicoya",
        position: [10.218921, -85.376166],
        description: "Famous for its cuisine and cultural festivals.",
        image: "/images/map-icons/tortilla.webp",
        tips: "Home to the famous tortilla festival.",
      },
      {
        id: 4,
        name: "Nicoya",
        position: [10.142483, -85.4537],
        description: "Famous for being one of the 5 Blue Zones in the world.",
        image: "/images/map-icons/Nicoya.webp",
        tips: "Discover its colonial church and unique history.",
      },
    ],
  },
};

// Importar componentes dinámicos de Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const TouristGuideSection = () => {
  const [L, setL] = useState(null); // Estado para Leaflet
  const [isSatellite, setIsSatellite] = useState(false); // Estado del modo de mapa
  const { language } = useLanguage(); // Obtener idioma del contexto
  const { title, toggleButton, places } = translations[language];

  useEffect(() => {
    // Cargar Leaflet solo en el cliente
    import("leaflet").then((leaflet) => setL(leaflet));
  }, []);

  const createCustomIcon = (imageUrl) => {
    if (!L) return null;
    return new L.Icon({
      iconUrl: imageUrl,
      iconSize: [30, 20],
      iconAnchor: [0, 20],
      popupAnchor: [17, -10],
    });
  };

  const toggleMapMode = () => setIsSatellite(!isSatellite);

  return (
    <section className="container mx-auto my-16 border-t-2" id="tourist">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mt-10 mb-4 text-stone-800 dark:text-stone-200">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        {/* Mapa Interactivo */}
        <div className="w-full md:w-2/3 h-96">
          {L && typeof window !== "undefined" && (
            <>
              <button
                onClick={toggleMapMode}
                className="mb-2 px-4 py-2 bg-blue-600 text-white rounded"
              >
                {isSatellite
                  ? toggleButton.default
                  : toggleButton.satellite}
              </button>
              <MapContainer
                center={[9.916, -85.53]}
                zoom={8.5}
                className="h-96 rounded-lg overflow-hidden shadow-lg shadow-slate-300 relative z-10"
              >
                {isSatellite ? (
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy;"
                  />
                ) : (
                  <TileLayer
                    url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution="&copy;"
                  />
                )}
                {places.map((place) => (
                  <Marker
                    key={place.id}
                    position={place.position}
                    icon={createCustomIcon(place.image)}
                  >
                    <Popup>
                      <div>
                        <Image
                          src={place.image}
                          alt={place.name}
                          height={300}
                          width={300}
                          className="w-full mb-2 rounded"
                        />
                        <h3 className="font-bold">{place.name}</h3>
                        <p>{place.description}</p>
                        <small className="italic">{place.tips}</small>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </>
          )}
        </div>

        {/* Información de Lugares */}
        <div className="md:max-w-sm px-5 pt-2 rounded-lg overflow-hidden shadow-lg shadow-slate-300 text-wrap mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            {language === "es" ? "Lugares de interés" : "Points of Interest"}
          </h3>
          {places.map((place) => (
            <div key={place.id} className="mb-4">
              <h4 className="text-xl font-bold hover:text-yellow-100/90 hover:underline">
                {place.name}
              </h4>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristGuideSection;
