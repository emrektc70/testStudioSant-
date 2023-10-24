import Metadata from 'next/head'
import Home from './pages/home';

export default function Page() {
  return (
    <div>
      <Metadata>
        <title>Votre titre ici</title>
        <meta name="description" content="Votre description ici" />
      </Metadata>
      <Home />
    </div>
  );
}
