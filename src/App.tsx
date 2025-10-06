import { useState } from "react";
import { Heart, MapPin, Clock, Calendar, Gift, Home as HomeIcon, Phone, Mail, Utensils, Bed, Car } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./components/ui/form";
import couplePhoto from "@assets/couple-photo.jpeg";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection("home")}
              className="font-serif text-xl font-semibold text-foreground hover-elevate rounded-md px-3 py-1.5"
              data-testid="button-logo"
            >
              A & M
            </button>
            <div className="hidden md:flex items-center gap-1">
              {[
                { id: "home", label: "Home" },
                { id: "storia", label: "La Nostra Storia" },
                { id: "grande-giorno", label: "Il Grande Giorno" },
                { id: "rsvp", label: "RSVP" },
                { id: "lista-nozze", label: "Lista Nozze" },
                { id: "info", label: "Info Utili" },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? "bg-accent" : ""}
                  data-testid={`button-nav-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${couplePhoto})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Heart className="w-16 h-16 mx-auto mb-8 text-primary" />
          <h1 
            className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            data-testid="text-couple-names"
          >
            Alessandro & Maria
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-serif mb-8" data-testid="text-welcome-message">
            Celebriamo il nostro amore
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-lg sm:text-xl mb-12">
            <div className="flex items-center gap-2" data-testid="text-wedding-date">
              <Calendar className="w-5 h-5" />
              <span>15 Giugno 2025</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2" data-testid="text-wedding-location">
              <MapPin className="w-5 h-5" />
              <span>Roma, Italia</span>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection("rsvp")}
            className="bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2 rounded-full px-8 py-6 text-lg"
            data-testid="button-rsvp-hero"
          >
            Conferma la Tua Presenza
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("storia")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scorri</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/80 rounded-full" />
            </div>
          </div>
        </button>
      </section>

      {/* Story Section */}
      <section id="storia" className="py-20 sm:py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-4 text-foreground" data-testid="heading-story">
            La Nostra Storia
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Un viaggio d'amore che ci ha portato fino a qui
          </p>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            {/* Story Item 1 */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="flex-1 sm:text-right" data-testid="card-story-met">
                <Card className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl sm:text-3xl flex items-center gap-3 sm:justify-end">
                      <Heart className="w-6 h-6 text-primary" />
                      Come Ci Siamo Conosciuti
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src={couplePhoto} 
                      alt="Foto della coppia" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-muted-foreground leading-relaxed">
                      Era una tiepida sera di primavera del 2018. I nostri sguardi si sono incrociati per la prima volta
                      durante una cena con amici comuni. C'è stata subito una scintilla, una connessione speciale che
                      nessuno dei due ha potuto ignorare.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden sm:block w-20 h-20 rounded-full border-4 border-primary bg-background flex-shrink-0 relative z-10 overflow-hidden">
                <img 
                  src={couplePhoto} 
                  alt="Foto della coppia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1" />
            </div>

            {/* Story Item 2 */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="flex-1" />
              <div className="hidden sm:block w-20 h-20 rounded-full border-4 border-primary bg-background flex-shrink-0 relative z-10 overflow-hidden">
                <img 
                  src={couplePhoto} 
                  alt="Foto della coppia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1" data-testid="card-story-love">
                <Card className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl sm:text-3xl flex items-center gap-3">
                      <Heart className="w-6 h-6 text-primary" />
                      La Nostra Storia d'Amore
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src={couplePhoto} 
                      alt="Foto della coppia" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-muted-foreground leading-relaxed">
                      Da quel momento abbiamo trascorso insieme ogni istante possibile. Lunghe passeggiate al tramonto,
                      viaggi indimenticabili, risate infinite e la certezza di aver trovato la nostra anima gemella.
                      Ogni giorno insieme è stato un dono prezioso.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Story Item 3 */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="flex-1 sm:text-right" data-testid="card-story-proposal">
                <Card className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl sm:text-3xl flex items-center gap-3 sm:justify-end">
                      <Heart className="w-6 h-6 text-primary" />
                      La Proposta
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src={couplePhoto} 
                      alt="Foto della coppia" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-muted-foreground leading-relaxed">
                      Durante un weekend a Venezia, sotto il ponte di Rialto illuminato dalle stelle, Alessandro ha
                      chiesto a Maria di sposarlo. Con le lacrime agli occhi e il cuore che batteva forte, Maria ha
                      detto sì. È stato il momento più magico delle nostre vite.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden sm:block w-20 h-20 rounded-full border-4 border-primary bg-background flex-shrink-0 relative z-10 overflow-hidden">
                <img 
                  src={couplePhoto} 
                  alt="Foto della coppia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Day Section */}
      <section id="grande-giorno" className="py-20 sm:py-24 md:py-32 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-4 text-card-foreground" data-testid="heading-wedding-day">
            Il Grande Giorno
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Tutti i dettagli per celebrare insieme questo momento speciale
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-ceremony">
              <CardHeader>
                <CardTitle className="font-serif text-2xl sm:text-3xl flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  Cerimonia
                </CardTitle>
                <CardDescription className="text-base">La celebrazione religiosa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">15 Giugno 2025</p>
                    <p className="text-sm text-muted-foreground">Domenica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">ore 16:00</p>
                    <p className="text-sm text-muted-foreground">Arrivo ore 15:30</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Chiesa di Santa Maria in Trastevere</p>
                    <p className="text-sm text-muted-foreground">Piazza Santa Maria in Trastevere, 00153 Roma</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => window.open("https://maps.google.com/?q=Chiesa+Santa+Maria+Trastevere+Roma", "_blank")}
                  data-testid="button-ceremony-map"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Visualizza sulla Mappa
                </Button>
              </CardContent>
            </Card>

            {/* Reception */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-reception">
              <CardHeader>
                <CardTitle className="font-serif text-2xl sm:text-3xl flex items-center gap-3">
                  <Gift className="w-6 h-6 text-primary" />
                  Ricevimento
                </CardTitle>
                <CardDescription className="text-base">La festa continua</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">15 Giugno 2025</p>
                    <p className="text-sm text-muted-foreground">Domenica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">ore 19:00</p>
                    <p className="text-sm text-muted-foreground">Aperitivo e cena</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Villa Doria Pamphilj</p>
                    <p className="text-sm text-muted-foreground">Via Aurelia Antica, 183, 00165 Roma</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => window.open("https://maps.google.com/?q=Villa+Doria+Pamphilj+Roma", "_blank")}
                  data-testid="button-reception-map"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Visualizza sulla Mappa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <RSVPSection />

      {/* Gift Registry Section */}
      <section id="lista-nozze" className="py-20 sm:py-24 md:py-32 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <Gift className="w-16 h-16 mx-auto mb-8 text-primary" />
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 text-card-foreground" data-testid="heading-gifts">
            Lista Nozze
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            La vostra presenza è il nostro dono più bello, ma se desiderate contribuire al nostro futuro insieme,
            saremo lieti di ricevere un vostro pensiero.
          </p>

          <Card className="max-w-md mx-auto" data-testid="card-bank-details">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Coordinate Bancarie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <div>
                <p className="text-sm text-muted-foreground">Intestatario</p>
                <p className="font-medium text-card-foreground" data-testid="text-bank-holder">Alessandro Rossi & Maria Bianchi</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">IBAN</p>
                <p className="font-mono text-sm font-medium text-card-foreground" data-testid="text-bank-iban">IT60 X054 2811 1010 0000 0123 456</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Banca</p>
                <p className="font-medium text-card-foreground" data-testid="text-bank-name">Banca Intesa Sanpaolo</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Causale</p>
                <p className="font-medium text-card-foreground">Regalo Matrimonio Alessandro & Maria</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Useful Info Section */}
      <section id="info" className="py-20 sm:py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-4 text-foreground" data-testid="heading-info">
            Informazioni Utili
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Tutto quello che devi sapere per organizzare al meglio la tua partecipazione
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Accommodation */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-accommodation">
              <CardHeader>
                <Bed className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="font-serif text-xl sm:text-2xl">Dove Dormire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-card-foreground mb-1">Hotel Trastevere</p>
                  <p className="text-sm text-muted-foreground mb-2">A 10 minuti dalla chiesa</p>
                  <p className="text-sm text-muted-foreground">Tel: +39 06 1234567</p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">B&B Villa Doria</p>
                  <p className="text-sm text-muted-foreground mb-2">Vicino al ricevimento</p>
                  <p className="text-sm text-muted-foreground">Tel: +39 06 7654321</p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Menziona il matrimonio Rossi-Bianchi per tariffe agevolate
                </p>
              </CardContent>
            </Card>

            {/* How to Get There */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-directions">
              <CardHeader>
                <Car className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="font-serif text-xl sm:text-2xl">Come Arrivare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-card-foreground mb-2">In Auto</p>
                  <p className="text-sm text-muted-foreground">
                    Uscita GRA Roma Centro, direzione Trastevere. Parcheggi disponibili nelle vicinanze.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-2">Con i Mezzi Pubblici</p>
                  <p className="text-sm text-muted-foreground">
                    Tram 8 o autobus H fino a Piazza Sonnino, poi 5 minuti a piedi.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-2">Dall'Aeroporto</p>
                  <p className="text-sm text-muted-foreground">
                    Treno Leonardo Express fino a Termini, poi metro B fino a Piramide.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contacts */}
            <Card className="hover-elevate transition-all duration-300" data-testid="card-contacts">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="font-serif text-xl sm:text-2xl">Contatti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-card-foreground mb-2">Alessandro</p>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span data-testid="text-contact-phone-alessandro">+39 333 1234567</span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span data-testid="text-contact-email-alessandro">alessandro@email.it</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-2">Maria</p>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span data-testid="text-contact-phone-maria">+39 333 7654321</span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span data-testid="text-contact-email-maria">maria@email.it</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Per qualsiasi informazione non esitate a contattarci!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div 
            className="text-4xl sm:text-5xl font-script mb-4 text-primary"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            data-testid="text-footer-initials"
          >
            A & M
          </div>
          <p className="text-muted-foreground mb-2">15 Giugno 2025 • Roma, Italia</p>
          <p className="text-sm text-muted-foreground">
            Non vediamo l'ora di celebrare con voi!
          </p>
        </div>
      </footer>
    </div>
  );
}

function RSVPSection() {
  const [guestName, setGuestName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crea il corpo dell'email
    const subject = encodeURIComponent("Conferma Presenza Matrimonio - " + guestName);
    const body = encodeURIComponent(
      `Nome e Cognome: ${guestName}\n` +
      `Numero di Persone: ${numberOfGuests}\n` +
      `Allergie o Intolleranze Alimentari: ${dietaryRestrictions || "Nessuna"}`
    );
    
    // Apri il client email
    window.location.href = `mailto:jacopopati@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="rsvp" className="py-20 sm:py-24 md:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <Heart className="w-16 h-16 mx-auto mb-8 text-primary" />
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-6 text-foreground" data-testid="heading-rsvp">
          Conferma la Tua Presenza
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Sarà un onore averti con noi nel nostro giorno speciale. Per favore, conferma la tua partecipazione
          entro il 1 Maggio 2025.
        </p>

        <Card data-testid="card-rsvp-form">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Dettagli Partecipazione</CardTitle>
            <CardDescription>
              Compila il modulo per confermare la tua presenza
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="guestName" className="text-sm font-medium">
                  Nome e Cognome
                </label>
                <Input
                  id="guestName"
                  placeholder="Mario Rossi"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  data-testid="input-guest-name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="numberOfGuests" className="text-sm font-medium">
                  Numero di Persone
                </label>
                <Input
                  id="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  required
                  data-testid="input-number-of-guests"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="dietaryRestrictions" className="text-sm font-medium">
                  Allergie o Intolleranze Alimentari (opzionale)
                </label>
                <Textarea
                  id="dietaryRestrictions"
                  placeholder="Indica eventuali allergie o intolleranze alimentari..."
                  className="resize-none"
                  rows={4}
                  value={dietaryRestrictions}
                  onChange={(e) => setDietaryRestrictions(e.target.value)}
                  data-testid="input-dietary-restrictions"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                data-testid="button-submit-rsvp"
              >
                Invia Conferma via Email
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
