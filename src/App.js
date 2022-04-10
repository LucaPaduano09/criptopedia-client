import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepage/Home";
import Crypto from "./components/Homepage/Crypto";
import Guida from "./components/Homepage/Guida";
import Newsletter from "./components/Homepage/Newsletter";
import Footer from "./components/Footer";
import Recruitment from "./components/Recruitment";
import Login from "./components/Login";
import Guru from "./components/Homepage/Guru";
import CryptoPage from "./components/Crypto/CryptoPage";
import SingleCrypto from "./components/Crypto/SingleCrypto";
import Admin from "./components/admin/Admin";
import AdminHome from "./components/admin/AdminHome";
import Sidebar from "./components/admin/Sidebar";
import CryptoAdd from "./components/admin/CryptoAdd";
import ScrollToTop from "./components/ScrollToTop";
import AdminMessages from "./components/admin/AdminMessages"
import AdminSingleMessage from "./components/admin/AdminSingleMessage";
import GuruLogin from "./components/Guru/GuruLogin";
import GuruChat from "./components/Guru/GuruChat";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import GuidaPage from "./components/Guida/GuidaPage";
function App() {
  return (
    <Router>
      <div className="App">
      <ScrollToTop />
        <Switch>
          <Route path={"/cryptos"}>
            <Header />
            <CryptoPage />
            <Footer />
          </Route>
          <Route path={"/monete/:id"}>
            <Header />
            <SingleCrypto />
            <Footer />
          </Route>
          <Route path={"/login"}>
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path={"/lavora-con-noi"}>
            <Header />
            <Recruitment />
            <Footer />
          </Route>
          <Route path={"/guida"}>
            <Header />
            <Guida />
            <Footer />
          </Route>
          <Route path={"/come-iniziare"}>
            <Header />
              <GuidaPage 
              titolo="Come iniziare"
              contenuto={`
              <h2>1.1 - PREREQUISITI:</h2>

              prima di 'iniziare ' vediamo tutto quello di cui abbiamo bisogno :
              *una connessione a internet
              *peferibilmente un pc ma anche uno smartphone 
              *un capitale (anche minimo) da investire, che non deve essere superiore alla quantità massima di denaro che ci si puo permettere di perdere!
              *pazienza , studio e impegno.
              *sistemi di sicurezza adeguati: face id, touch id, autenticazioni a due fattori ecc.
              
              <h2>1.2 -SCEGLIERE COME INIZIARE:</h2>

              ecco,adesso ci tocca solo scegliere come iniziare, se in maniera centralizzata (cefi) o decentralizzata (defi), anche se per quest'ultima alcune volte occorre 
              passare per piattaforme centralizzate per il primo passaggio.

              <h2>CEFI</h2>

              la parola cefi (centralized finance) racchiude tutte le piattaforme centralizzate come binance, crypto.com , kucoin ecc., che richiedono il kyc (verifica dell identità,invio documenti),
              per adesso non analizzeremo i pro e i contro, ma lo faremo in seguito,
              dove effetivamente è molto piu facile iniziare soprattutto per chi possiede solo uno smartphone.
              basterà scegliere la piattaforma che piu preferiamo, ( per i neo principianti consiglio crypto.com per la sua 'user friendly' molto semplificata.
              di seguito vi metterò il codice promo che vi regalerà 50$ in cro,token nativo della piattaforma)
              
              una volta verificato il proprio account sarà possibile procedere:
              il prossimo passaggio sarà quello di acquistare le crypto che piu preferiamo.
              esistono varie opzioni:
              -direttamente da carta di crdito/debito/prepagata (ad esempio su crypto.com app) dove si paghera' oltre alla commissione(quando presente ) anche uno spread maggiore (scelta sconsigliata ma instantanea)
              -caricare il proprio account con valuta fiat(euro o dollari) tramite bonifico o quando possibile con carta di credito/debito/prepagata,spostando semplicemnte gli euro o dollari dal proprio conto bancario all account,(rimarranno sempre euro o dollari ,non saranno ancora crypto),
              nota bene che la soluzione tramite bonifico sarà sempre gratuita mentre tramite carta vi sarà una commissione che varia dal 1 al 3% in base alla piattaforma su cui operiamo.
              una volta scelto come caricare l'account si puo procede in uno di  questi modi :
              1 quando possibile (ad esempio binance) possiamo scambiare direttamente i nostri euro che troveremo nel nostro fiat wallet in (alcune) crypto(di solito le piu importanti btc,eth ecc...).
              2 convertire la vulata fiat in stable coin. le stable coin sono delle crypto che hanno valore unitario pari a 1 dollaro.
               poi scambiare queste ultime con le crypto desiderate avendo una scelta piu ampia, e generando maggiore volume di mercato.(questa opzione consente di risparmiare delle volte sulle commissioni e spread,
                ma solo su alcune piattaforme).
              -portare crypto che gia possediamo su altre piattaforme(cefi o defi) o altri wallet(custodial o non) fino alla  piattaforma in cui desideriamo operare.bisogna prestare massima attenzione alla chain che decidiamo di utilizzare per l'invio  delle crypto, onde evitare di pagare troppi costi di transazione se non addirittura di pagare piu commissioni del capitale trasportato.
              
               per effettuare questo tipo di procedimento bisognera copiare l'address della piattaforma in cui desideriamo ricevere i fondi(spesso inizierà con 0x se evm compatibile , ma non sempre prendi luna o solana)
               selezionando l'apposita chain,facendo attenzione a non trascurare questo dettaglio,all'apparenza insignificante,poichè se le chain di invio/ricevimento non coincidono si puo incorrere in una perdita permanente.
               esempio:ho dei eth su kucoin e voglio portarli su binance.dovrò selezionare in fase di invio una rete presente su entrambe le piattaforme, e copiare l'adress specifico di quella rete. 
               selezionando una rete non supportata sulla piattaforma destinataria,perdero' i miei fondi fino a quando quella rete non sarà supportata, nel peggior caso , per sempre.
              
               ricevute le crypto sulla piattaforma desiderata o si scambia direttamente la crypto 'a'(crypto che gia possediamo) con la crypto 'b'(crypto che vogliamo acquistare), anche solo in parte. 
               quando non è possibile o non vi è presente un  market tra le due crypto (a e b), convertiamo prima in stable coin, per poi scambiare direttamente con la nostra crypto desiderata. 
               esempio:possiedo eth su binance e voglio comprare spell su kucoin ;invio eth da rete arbitrium o trx ( pagando meno fees) ricevo eth su kucoin,e dato che ad oggi spell e scambiabile su kucoin solo tramite usdc,converto i miei eth in    usdc e poi li riconvertiro in spell.(scelta consigliata per i piu esperti).
              
              questo tipo di acquisto/vendita viene chiamato market order, che è un metodo rapido per comprare/vendere crypto, giusto compromesso tra rapidità e commisioni.in realtà il piu rapido in assoluto, ma anche il piu costoso, è acquistare  tramite carta/debito/credito/prepagata,ad esempio sull'app di crypto.com da non confondere con l'exchange.
              in questo modo compreremo/scambieremo a prezzo attuale di mercato (esempio btc vale 44.000$ e lo paghero 44.000$,meno le fees),
              da cui il nome market order (ordine a mercato)
              
              se invece vogliamo acquistare/vendere/scambiare ad un valore che riteniamo piu opportuno, dobbiamo effettuare un limit order(ordine a limite),un'ordine di acquisto che si completerà quando il valore della crypto in questione raggiungerà il valore da noi indicato.esempio:eth vale attualmente 4000$, ma io sono interessato a venderlo solo quando avra' un valore di 10.000$, imposto il mio limit order in posizione 'sell' impostando come valore di vendita 10.000.
              al contrario se volessi comprare eth quando avrà un valore di 3500$,impostero' un limit order in posizione 'buy' con valore di acquisto di 3500$, risparmiando (o guadagnando) cosi 500$(scelta consigliata per gli esperti).
              
              <h2>DEFI</h2>

               la defi (decentralized finance) racchiude tutte quelle piattaforme di interoperabilità decentralizzata , quindi non rintracciabile e non regolamentata da terzi ma solo dalla chain stessa.
               non vi sarà nell 99% dei casi una verifica kyc,ma allo stesso tempo non vi sarà possibile operare direttamente con valuta fiat ma avrete bisogno delle stable coin. 
               la defi è un settore in forte sviluppo, nell'ultimo anno ci sono stati i maggiori guadagni del settore crypto, ma anche le piu grandi perdite,quindi massima attenzione e massima sicurezza.
               
              per operare in defi abbiamo bisogno o:
              -di un wallet metamusk(il migliore a mio avviso)o trust wallet, anche se cosi non opereremo al 100% in maniera irrintracciabile poichè alcuni passaggi saranno comunque registrati ma diciamo che questa soluzione è comunque ottima per la  defi poiche' è un ottimo rapporto tra decentralizzazione,sicurezza e facilità d'uso.
              - wallet non custodial(in cefi i wallet saranno custodial).non approfondiremo ancora questo punto poichè molto complicato , ma ne riparleremo in seguito,quindi per chi ha urgenza di procedere in defi consigliamo metamusk.
               il succo è che nei wallet non custodial saremo noi la banca di noi stessi , avremo noi tutta la responsabilità di cio che succede ai nostri fondi nel bene e nel male, avremmo un seed che comprenderà dalle 12 alle 36 parole che saranno  la chiave del nostro wallet. non dare mai a nessuno questa chiave unica che puo aprire il tuo wallet! questo argomento dei wallet lo riprendermo in seguito poichè va approfondito ed è molto importante.
              
              <h2>1.3 EXCHANGE</h2>
              
              premettendo che della defi ne parleremo nei capitoli successivi,in quanto richiede delle conoscenze di base, il prossimo passo per proseguire tramite cefi e' la scelta dell'exchange.
              esistono tanti exchange, ognuno ha i suoi vantaggi e la propria moneta. parleremo adesso nello specifico degli exchange piu conosciuti.
              
              <h2>BINANCE</h2>

               e' stato fondato nel luglio del 2017 da changpeng zhao. binance e' l'exchagne di crypto-asset piu grande al mondo in termini di cambi giornalieri.
               il token di gorvenance della piattafroma e' il 'binance coin' (bnb), detenendo quest'ultimo si ottengono dei vantaggi come il launchpad, il launchpool, lo staking automatico e flessibile ecc...
              
              <h2>CRYPTO.COM</h2>

               fondato nel 2016 da bobby bao e poi rinominato nel 2018 in seguito all'acquisto di un dominio di proprieta' del ricercatore di crittografia e professore matt blaze.
               crypto.com ha importanti accordi di sponsorizzazione con i los angeles lakers , di cui lo stadio si chiama appunto crypto.com arena dal 25 dicembre 2021,la formula 1 ,
               la serie a , l' ufc , il paris saint-germain fc , i philadelphia 76ers ,  i montreal canadiens ,  e water.org, di cui mat demon e il suo co-fondatore.
               crypto.com è un exchange sicuramente molto piu user friendly rispetto ai suoi competitor, per questo per i principianti e' molto piu consigliato rispetto a gli altri .
              
              <h2>KUCOIN</h2>

               kucoin e' un exchange con una vasta scelta di crypto valute , anch'esso ha il suo token ma e' un po' piu complesso da usare poiche' per ogni tipologia di operazione si deve usare un wallet all'interno del suo exchange.
               esempio : per lo staking si utilizza il wallet principale , per acquistare o vendere crypto c'e' l'account trading che prima deve essere caricato di usdt dall account principale e cosi via.
              
              ovviamente esistono tanti altri exchange ma abbiamo elencato i piu conosciuti e quindi si spera i piu sicuri . 
              `}
              />
            <Footer />
          </Route>
          <Route path={"/guru-login"}>
            <Header />
            <GuruLogin />
          </Route>
          <Route path={"/guru-chat"}>
            <Header />
            <GuruChat />
          </Route>
          <Route path={"/admin"}>
            <Admin />
          </Route>
          <Route path={"/admin-home"}>
            <Sidebar />
            <AdminHome />
          </Route>
          <Route path={"/admin-messages"}>
            <Sidebar />
            <AdminMessages />
          </Route>
          <Route path={"/admin-message/:id"}>
            <Sidebar />
            <AdminSingleMessage />
          </Route>
          <Route path={"/cryptos-add"}>
            <Sidebar />
            <CryptoAdd />
          </Route>
          <Route path={"/"}>
            <Header />
            <Home />
            <Crypto />
            <Guru />
            <Newsletter />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
