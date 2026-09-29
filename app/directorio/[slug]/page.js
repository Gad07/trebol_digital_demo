import DynamicTarjetaPage from '../../tarjeta/[slug]/page';

// /directorio/[slug] serves the same profile as /tarjeta/[slug]; the canonical
// is declared in this route's layout.js.
export default function DynamicDirectorioSlugPage({ params }) {
  return <DynamicTarjetaPage params={params} />;
}
