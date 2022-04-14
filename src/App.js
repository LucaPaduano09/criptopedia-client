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
import AdminMessages from "./components/admin/AdminMessages";
import AdminSingleMessage from "./components/admin/AdminSingleMessage";
import GuruLogin from "./components/Guru/GuruLogin";
import GuruChat from "./components/Guru/GuruChat";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import GuidaPage from "./components/Guida/GuidaPage";
import NewsHome from "./components/News/NewsHome";
import SingleNew from "./components/News/SingleNew";
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path={"/news/:id"}>
              <Header />
              <SingleNew />
              <Footer />
          </Route>
          <Route path={"/news"}>
              <Header />
              <NewsHome />
              <Footer />
          </Route>
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
          <Route path={"/token"}>
            <Header />
            <GuidaPage
              titolo="Token"
              contenuto={`
              <h2>2.1 cosa è un token</h2>

              un token è un insieme di informazioni digitali all’interno di una blockchain che  conferiscono un diritto a un determinato soggetto, la tokenizzazione è la  conversione dei diritti di un bene in un token digitale registrato su una  blockchain.
              per semplificare ulteriormente un concetto così astratto e capire cosa sono i token e come funzionano si può utilizzare l’esempio dei bollini del supermercato.
              quando paghiamo la spesa, i bollini che il cassiere ci consegna insieme allo scontrino sono dei token, vale a dire degli oggetti a cui viene attribuito un valore riconosciuto solo all’interno del contesto in cui è possibile usarli. infatti, i bollini non hanno alcun valore in quanto tali ma possono essere utilizzati come moneta di scambio all’interno del supermercato che li emette e permettono di ricevere in cambio uno o più prodotti scelti dal catalogo.
              
              altri esempi di token sono le fiches del casinò, i bracciali indossati dagli ospiti di una spa, i buoni pasto, i gettoni di una sala giochi e cosi via fino a rendere l'idea.
               l'insieme dei movimenti e delle transazioni  di un token viene memorizzato nella sua blockchain mediante degli smart contract.
               uno smart contract e' un contratto o per meglio dire una firma digitale che conferma un movimento o una transazione tra il token e la blockchain.
               con il termine token si sottointendono tutte le criptovalute. in gergo si e' soliti escludere da questo termine  bitcoin ed etherum che dal punto di vista tecnico sono anch'essi token.
               a differnza del token,che viene gestito dalla propria blockchain, un cryptoasset e' un token che viene gestito da un'altra blockchain.
               i cryptoasset sono molto riccorrenti in defi e sono impiegati  per eseguire numerose operazioni, dall'automatizzazione dei tassi d'interesse alle compravendite immobiliari. al tempo stesso, possono  essere negoziati e detenuti come  qualsiasi altra criptovaluta.
              
              <h2>2.2 la funzione dei token</h2>

                i token vengono classificati e denominati in base alla loro funzione. di seguito riportiamo le principali categorie, escludendone alcune come 'meme token','utility token' e altre, pur riconoscendone l'esistenza e magari in futuro   dedicare un approfondimento. 
                
                <img src="./tabella-token.png" alt="tabella"/>

              <h2>2.3 token fungibili e non fungibili: che cosa sono?</h2>

               è possibile dividere le applicazioni dei token su blockchain in due grandi famiglie:
              
              -token fungibili: i beni fungibili, detti anche interscambiabili, sono quelli che possono essere sostituiti con altri della stessa tipologia poiché hanno caratteristiche simili. a questa categoria appartengono le crypto tradizionali
              
              -token non fungibili (nft): i non fungible-token sono oggetti digitali unici e riconoscibili, non sono interscambiabili tra loro, e sono dotati di un codice identificativo. rappresentano la copia digitale o il certificato di proprietà  digitale  di  oggetti del mondo fisico. i token non fungibili sono utilizzati per la gestione dell’identità digitale e garantiscono la privacy dei dati archiviati. 
              
              <h2>2.4 differenze tra token e criptovalute ed effetti delle tokenizzazione</h2>

               - le criptovalute funzionano con una propria blockchain indipendente e possono essere minate, ovvero ricavate attraverso l’elaborazione dei dati tramite computer;
              
              
               - i token sono creati su blockchain esistenti e non sono minabili. inoltre, le applicazioni dei token sono molteplici poiché possono rappresentare, ad esempio, il diritto di utilizzo di un servizio o la proprietà di un bene fisico o      finanziario;
              
              
               - i token sono unità di valore e possono quindi riguardare le criptovalute (payment tokens), mentre non è possibile il contrario.
              
              
               tokenizzare asset,ovvero generare un token nel mondo virtuale e collegarlo a un bene reale mediante uno smart contract, è il futuro di un economia in cui le transazioni sarano piu rapide sicure e meno costose.
               inoltre, non va dimenticato che il processo di tokenizzazione attrae investimenti, crea opportunità di business e genera nuovi posti di lavoro.
              
              `}
            />
            <Footer />
          </Route>
          <Route path={"/blockchain"}>
            <Header />
            <GuidaPage
              titolo="Blockchain"
              contenuto={`
              <h2>3.1 cosa e' una blockchain.</h2>

               la blockchain è una struttura dati condivisa e "immutabile", che facilita il  processo di registrazione delle transazioni e la tracciabilità dei beni in una rete  commerciale.
               qualsiasi cosa che abbia un valore può essere rintracciata e scambiata su una rete  blockchain, riducendo rischi e costi per tutti gli interessati.
              
              <h2>3.2 elementi chiave di una blockchain e la sua struttura</h2>

               la blockchain si basa sulle informazioni. più sono rapide e accurate, migliore sarà  l'efficienza della blockchain.
               la blockchain fornisce informazioni immediate, condivise e completamente trasparenti  archiviate in un registro immutabile.
               in un sistema blockchain le informazioni sono registrate in blocchi, ciascuno dei  quali contiene un determinato gruppo di dati. quando si aggiunge un nuovo gruppo di  dati, questi vanno a formare un nuovo blocco che si “concatena” al blocco precedente  (da qui il nome "blockchain"). 
              
              elementi chiave di una blockchain:
              
               -tecnologia di registro distribuito:
               tutti i partecipanti alla rete hanno accesso al registro distribuito e al record    immutabile di transazioni in esso contenuto. con questo registro condiviso, le    transazioni vengono annotate una sola volta, eliminando la duplicazione dei compiti,  tipica delle reti di business tradizionali.
              
               -record immutabili:
              nessun partecipante potrà modificare o manomettere una transazione, una volta annotata nel registro condiviso. se un record di transazione contiene un errore, dovrà essere aggiunta una nuova transazione per correggere l'errore, dopodiché entrambe le transazioni saranno visibili.
              
               -contratti intelligenti(smart contract):
              per accelerare le transazioni, un set di regole, chiamate contratto intelligente (smart contract), viene memorizzato sulla blockchain ed eseguito automaticamente. un contratto intelligente può definire le condizioni per i trasferimenti di obbligazioni aziendali, includere le condizioni per l'assicurazione di viaggio da pagare e molto altro ancora.

              ogni volta che avviene una transazione, questa viene registrata in un "blocco" di dati.
              ogni blocco è collegato a quelli che lo precedono e che lo seguono,
              piu blocchi formano una catena di dati che prende il nome di 'nodo'.i blocchi attestano l'ora e la sequenza esatta delle transazioni e i blocchi si collegano in modo sicuro tra loro per evitare che uno di essi venga alterato o inserito tra due blocchi esistenti. 
              ogniqualvolta viene validato un nuovo blocco, esso viene propagato a tutti i nodi della blockchain

              la struttura a catena è ciò che contraddistingue una blockchain da altri tipi di  database. per capire come funziona questa tecnologia è importante conoscere i tre   elementi chiave contenuti in ciascun blocco:
              
               -il proprio codice hash: un codice hash è una rappresentazione alfanumerica dei   dati. l'hash di un blocco è univoco e cambia se uno dei dati relativi al blocco viene modificato. 
              
               -il codice hash del blocco che lo precede nella catena: questo hash serve come  riferimento per mantenere i blocchi in ordine cronologico lineare. se ogni blocco si  riferisce all'hash univoco del blocco che lo precede, la catena rimane intatta.  inoltre, se le informazioni nel blocco cambiano, cambia anche l'hash.
              
               -una marca temporale: questa marca temporale specifica il momento in cui il blocco è stato creato e aiuta a mantenere l’ordine cronologico della catena.

               questi tre elementi combinati fanno in modo che i blocchi di una blockchain non  possano essere modificati e quindi immutabili. se qualcuno tentasse di  modificare  un blocco, cambierebbe anche l'hash e la marca temporale di quel blocco e di conseguenza, il blocco successivo nella catena non includerebbe più l'hash del  blocco che lo precede, rendendo immediatamente evidente che la blockchain è stata  alterata.
              
              `}
            />
            <Footer />
          </Route>
          <Route path={"/wallet"}>
            <Header />
            <GuidaPage
              titolo="Wallet"
              contenuto={`
              <h2>4. Cos'è un wallet</h2>

              Per comprendere cos’è un wallet per criptovalute si deve considerare che queste  monete non sono stampante da un ente, prevedendo una forma fisica, ma sono generate  attraverso un particolare processo che si sviluppa completamente in rete e che  utilizza una tecnologia innovativa come la blockchain.
              I wallet sono dispositivi che permettono di conservare le proprie criptovalute  
              Ogni portafoglio elettronico avrà un proprio indirizzo composto da lettere e numeri.  Questo servirà a ricevere denaro, proprio come l’IBAN di cui tutti dispongono.  L’indirizzo avrà una lettera iniziale differente in base alla criptovaluta di  riferimento.
              All’interno del proprio wallet ci saranno due chiavi differenti: una pubblica e  l’altra privata. La chiave pubblica è utilizzata durante la ricezione di denaro.   Durante una transazione infatti, questa chiave viene inviata al mittente.
              Quest’ultimo, dopo la ricezione della chiave, potrà effettuare il pagamento in  criptovaluta. La chiave privata invece è la chiave per accedere al tuo wallet , non  darla a nessuno, è un po' come il pin di un bancomat!
              Utilizzare un portafoglio è piuttosto semplice, infatti, una volta aperto, si potrà  decidere se inviare o ricevere denaro.
             
              Per ricevere la tua valuta non devi fare altro che richiedere un indirizzo di  ricezione dal wallet da fornire al mittente. Per quanto riguarda i pagamenti, è  necessario conoscere un indirizzo di ricezione del destinatario.
              Prima di inviare del denaro è necessario pagare una sorta di tassa, fondamentale per  la conferma del pagamento. In base alla quota scelta, la conferma del pagamento può  avvenire più o meno velocemente.
             
              Questo meccanismo avviene per la maggior parte delle criptovalute. Inoltre, ogni  transazione, una volta effettuata, è irreversibile, quindi è necessario controllare  con attenzione importo e indirizzo del destinatario.
              Tutte le tipologie di wallet permettono di inviare e ricevere denaro in criptovalute  e garantiscono l’anonimato dell’utente. 
             
              Esistono  diverse tipologie di wallet:
             
             -Hardware wallet: ovvero wallet fisici; si tratta di una chiavetta simile a quella   usb che verrà collegata a un dispositivo, con al suo interno un software necessario   per visionare i codici delle monete digitali. È tra le versioni più sicure, dato che  sarà possibile conservare le criptomonete al di fuori della rete e senza installare   un programma sul desktop.
             
             -Wallet desktop:È una versione di software che dovrà essere installata sul computer   dell’investitore. Ha un grado di sicurezza molto elevata, ma prevede la possibilità   di visionare e di utilizzare le criptovalute solo se si entra sul desktop.
             
             -Software wallet: wallet virtuali;In questo caso il software non è presente su un   dispositivo reale, ma sarà posizionato in rete. Ciò permette di utilizzare qualunque  computer e tablet inserendo gli appositi codici e i sistemi di verifica. Rispetto   alla versione desktop è più funzionale, ma ha una sicurezza minore, dato che rimarrà  sempre online. Oggi per compensare questa situazione, sono presenti delle versioni  di wallet che permettono di salvare i codici delle criptomonete offline, ciò  significa che i dati saranno conservati in server indipendenti.
             
             -Wallet exchange: ovvero i wallet integrati direttamente all’interno di piattaforme  ed exchange(binance,crypto. com)
             
             - Wallet mobile :È un’app che potrà essere utilizzata su qualunque dispositivo  digitale, iOS o Android
             
             
             Tutte queste tipologie di wallet si possono raggruppare in 2 macro-tipologie:
             
             -Hot wallet — è dotato di connessione a Internet e, per questo, fortemente criptato e  protetto con la massima sicurezza perché più vulnerabile. È archiviato online  attraverso delle apposite piattaforme che conservano le chiavi private e pubbliche.
             
             -Cold wallet — è archiviato e mantenuto offline, assicurando una minore vulnerabilità  agli attacchi digitali ma un maggiore rischio di minacce fisiche (furto, smarrimento  e manomissione).
             
             
              I wallet hot e cold rispondono a due esigenze diverse e non è inusuale avere  entrambi: tuttavia, starà a te valutare quale soluzione è consona alle tue necessità  individuali.
              `}
            />
            <Footer />
          </Route>
          <Route path={"/holding-trading"}>
            <Header />
            <GuidaPage
              titolo="Holding & Trading"
              contenuto={`
              <h2>5.1 differenze tra trading e hodling</h2>

               Premettiamo che l'analisi tecnica e l'analisi fondamentale sono delle analisi per cercare  di capire quando entrare  e quando uscire da un mercato finanziario.
               Sono quindi strumenti speculativi , per il trading e dunque non sono tanto utili per  il lungo periodo , che è quello a cui si dovrebbe credere nel mercato delle  cryptovalute.
               Trading è quindi esattamente l'opposto dell''hodling', infatti la parola “Hodl”  significa essenzialmente “tenere” o “conservare”, ed è spesso usato come sinonimo di  “mantenere” qualcosa, o semplicemente come versione abbreviata di “tenere” o  “conservare” appunto, e quindi il metodo di investimento che piu si addice a chi crede  in questo mondo e non cerca solo speculazione.
               La parola Hodl rappresenta un tipo di strategia da adottare nel lungo termine quando  si acquistano criptovalute. Consiste nell’acquistare una criptovaluta, tenendola nel  proprio portafoglio virtuale senza venderla per un determinato periodo di tempo, a  prescindere dalle fluttuazioni del mercato. Questo modo di investire si attua (o  meglio, si dovrebbe attuare) quando si ritiene che il valore dei propri token possa  aumentare nel periodo di riferimento.
               Anche se sembra semplice da attuare, richiede che il possessore di monete virtuali non  si lasci assalire dall’ansia o dal panico nel momento in cui il mercato è in ribasso o  non si faccia prendere dall’euforia quando quest’ultimo è in rialzo, vendendo magari   per un guadagno temporaneo irrisorio. La peculiarità richiesta da questo tipo di  investimento è il saper aspettare il termine stabilito per la vendita delle proprie  posizioni.
              Nonostante fare trading sia molto piu complicato e rischioso che holdare , tanto è vero che solo il 18% circa dei trader riesce effettivamente a guadagnare rispetto all'hodling, anche la strategia dell HODL ha i suoi rischi anche se inferiori.
              
              Le principali insidie derivanti dall’attuazione di questa strategia sono fondamentalmente due.
              
              In primo luogo, molti nuovi investitori tendono ad entrare nel mercato quando i prezzi sono alti, in quanto attirati dalla tendenza rialzista dello stesso. Questa scelta si traduce spesso in uno stress psicologico derivante dalla volatilità del mercato perché i trader potrebbero vedere i propri investimenti scendere del 20%, 30%, 40%, 50% anche nell’arco di qualche ora.
              
              In secondo luogo, la mancanza di esperienza dei nuovi investitori può giocare un brutto scherzo quando si tratta di vendere le proprie criptovalute per conseguire il profitto. Il nuovo trader rischia di non comprendere il momento giusto per liberarsi dai propri coin e questo perché per nessuno è facile alienare quando il mercato è in rialzo.
              
              Il consiglio che si può dare a tutti i trader che decidono di investire i propri soldi è quello di predisporre un progetto da cui partire, per non rischiare di perdere il proprio asset e di valutare attentamente lo scopo dell’investimento e la durata dello stesso. Bisogna inoltre sempre ricordarsi che il mercato delle valute virtuali è altamente volatile e se non si valutano attentamente le scelte che si fanno si rischia di perdere tutto soprattutto con il trading che consiste in piu operazioni facendo attenzione a non vendere basso e comprare alto ed avere bene in mente il motivo dell'operazione effettuata con un'obbiettivo fisso , che tra tanti puo essere l'aumento di valuta fiat (dollari,euro) o l'aumento della cryptovaluta stessa .
              
              <h2>5.2 ANALISI TECNICA E ANALISI FONDAMENTALE</h2>
              
              
              Esistono molti metodi che ti consentono di analizzare un asset che intendi negoziare. Le due strategie principali di cui si servono gli investitori sono l'analisi tecnica e l'analisi fondamentale.
              
              Quindi possiamo dare la seguente definizione:
              
               L'analisi tecnica considera i modelli deducibili dai dati di mercato per identificare le tendenze e prevedere come i mercati potrebbero muoversi in futuro. L'analisi fondamentale è una "visione d'insieme" che considera i dati finanziari, la comunità degli utenti e le applicazioni future nel mondo reale.
                
              Entrambe le analisi sono metodi validi per comprendere un investimento e possono essere utilizzate per qualsiasi asset, dalle azioni alle obbligazioni e, naturalmente, alle criptovalute. Inoltre, sulla base di queste due analisi, è possibile creare una strategia di negoziazione e decidere se si intende acquistare o vendere un determinato asset. Analizziamole .
              
              -ANALISI TECNICA:
               L'analisi tecnica esamina le performance storiche di un asset sul mercato. Considerando l'andamento del prezzo nel corso del tempo e il volume di negoziazione, è possibile rendersi conto delle tendenze di mercato in merito a una determinata risorsa. L'asset è in rialzo o in ribasso? Gli investitori sono propensi ad acquistarlo oppure desiderano liberarsene? È negoziato in modo ampio e in grandi quantità? Sono queste le domande che l'analisi tecnica si pone.  
              
              L'analisi tecnica è un tipo di approccio decisionale basato su fattori numerici. Si suppone che il mercato abbia già considerato per la determinazione del prezzo corrente tutte le informazioni conosciute  e il volume delle negoziazioni (disponibili sui siti di criptodati come Nomics e CoinGecko).
              I prezzi correnti riflettono le forze del mercato come l'offerta e la domanda. Secondo gli specialisti dell'analisi tecnica, pertanto, il prezzo di un asset dovrebbe fornire un'istantanea dei punti di vista e delle opinioni degli operatori di mercato ovvero il cosiddetto "sentiment", un importante indicatore utilizzato dai trader per prevedere le tendenze di mercato e prendere decisioni di investimento.
              
              -ANALISI FONDAMENTALE:
              L'analisi fondamentale, invece, esamina i dati fondamentali di un asset ovvero  intende tracciare un quadro più generale che comprenda informazioni in merito ai dati finanziari delle criptovalute, alla comunità degli utenti e alle applicazioni nel mondo reale. 
              Grazie all'analisi fondamentale è possibile decidere se un asset è sopravvalutato o sottovalutato sulla base del suo valore intrinseco. Un approccio di questo genere potrebbe essere più utile per la proiezione futura? Prendiamo ad esempio l'ethereum. La maggior parte delle applicazioni di finanza decentralizzata (DeFi) vengono gestite sulla sua blockchain. Ipotizzando una crescita della DeFi, possiamo prevedere un aumento del valore dell'ethereum in futuro.
              
              <h2>5.3 CONCLUSIONI</h2>
               
              Se non hai a disposizione i modelli e gli strumenti di alto livello utilizzati dai professionisti, puoi combinare le due strategie per ottenere un'analisi più completa della tua attività di trading. Mentre l'analisi fondamentale considera gli indicatori più oggettivi per individuare il valore potenziale a lungo termine di un asset, come l'attività della rete, il caso d'uso, il modello di business e la roadmap, l'analisi tecnica si concentra in modo specifico sulla performance di un asset sul mercato. 
              I trader professionisti tendono ad affidarsi in misura maggiore a una delle due analisi. Sui mercati più ampi e maturi, d'altro canto, sono rappresentate entrambe le tendenze. Un trader, ad esempio, potrebbe eseguire un'analisi tecnica basandosi su modelli computerizzati che esaminano in modo approfondito le evoluzioni dei prezzi e dei volumi di negoziazione di un titolo , inclusi le regressioni, l'indicatore di forza relativa e i dati provenienti dai mercati azionari. Se un determinato asset è caratterizzato da un andamento altalenante, in cui si osservano regolarmente alti e bassi, l'analisi tecnica può fornire agli investitori utili informazioni sulla frequenza con la quale questi cicli a breve termine si manifestano, aiutandoli, quindi, a trarne vantaggio. 
              Tieni presente che e' notoriamente difficile ideare una strategia di investimento a breve termine che risulti efficace. La storia non si ripete. Pertanto, anche i modelli che fotografano l'evoluzione dei prezzi non costituiscono sempre la base per previsioni affidabili, particolarmente nel caso di mercati soggetti alla volatilità. 
              
              `}
            />
            <Footer />
          </Route>
          <Route path={"/scegliere-dove-investire"}>
            <Header />
            <GuidaPage
              titolo="Scegliere Dove Investire"
              contenuto={`
              <h2>6 SCEGLIERE LE CRYPTO SU CUI INVESTIRE</h2>

              1.Il primo passaggio per capire su quale crypto iniziare a concentrarsi è effettuare l'analisi  fondamentale , quindi:
              provare a comprendere il modello che sostiene il valore di un token, quindi cercare,anche se molto difficile , di eliminare tutta la componente data dalla speculazione che è un elemento sovrano nel nostro mercato crypto, dato che il valore reale di una coin  al 99% non corrisponde con i grafici del prezzo,causa hype speculazione, l'essere di trend ecc che influenzano il prezzo scelto . 
              quindi  possiamo anche vederlo come un filtro che elimina tutte queste componenti e ci lascia un modello che ci indica quale puo' essere il valore del token/coin nel tempo; questo modello va anche proiettato nel futuro ipotizzandone l'efficacia e la sostenibilità.
              per modello intendiamo anche l' analisi di domanda ed offerta quindi capire concretamente cosa determina realmente la domanda e l'offerta .
              in seguito effettuare un'analisi fondamentale  astratta (non come le precedenti che si basanosu dati concreti), quindi vediamo la road map ,se è stata rispettata e quello che prevede in futuro e analizziamo i membri del team , i progetti a cui lavorano, le loro esperienze passate sia buone(ad esempio hanno portato una blockchain al suo sviluppo massimo ) o cattive (rug pull , truffe ecc...)
              2.il secondo passo e capire quali sono i parametri che possono andare a farci valutare meglio o peggio una coin rispetto ad un'altra.
              
              parametro 1:
              - time on market: analizzare la vita del progetto quindi verificare da quanto tempo è sul mercato.
              maggiore è il tempo durante il quale il progetto è  sul mercato minore è il rischio intrinseco, quindi piu affidabile, poichè se è sul mercato da tanti anni vuol dire che ha ottenuto risultati , si è evoluta , quindi abbiamo piu risultati concreti e dunque valutabili e quindi il prezzo rappresentato su un grafico sara' gia piu veritiero.
              La prima domanda che sorge spontanea è : allora comprare in pre sale è sbagliato? la risposta è dipende dal progetto , chi la lancia chi c'è dietro ecc. 
              Quindi possiamo dire che investire su progetti appena nati equivale ad una scommessa , quindi ognuno faccia le sue valutazioni e tragga le conclusioni studiando il progetto che si intende acquistare.
              
              parametro 2:
              -analisi settoriale : bisogna capire il progetto a che settore appartiene( nft , blockchain , gaming , layer ecc). 
              In seguito fare un'analisi dei trend in corso per capirne il futuro nel breve termine e valutare quindi se è il momento giusto per entrarci o meno.
              La prossima analisi sarà quella dell'utilità futura per valutarne il medio- termine che va aldilà dei trend.
              per breve termine intendiamo una durata di tempo fino a 3 mesi massimo , con medio termine una durata di tempo che va dai 5 mesi ai 5 anni e per lungo termine dai 5 anni in poi .
              da come potete intuire , analizzare il lungo termine è pressochè impossibile dato che c'è un margine di tempo troppo ampio e sarebbe impossibile anche prevederne gli eventi che potrebbero scaturirne delle conseguenze ( guerre ,catastrofi , nuove tecnologie ecc.)
              
              parametro 3 :
              analisi del prezzo storico: analizzare se l'andamento del prezzo è organico , quindi un trend  rispettato nel tempo anche se non accade quasi mai causa la componente speculativa, vedere nel corso del tempo i pump e dump , piu ce ne sono peggiore sarà la valutazione del progetto poichè creano selling pressure , quindi un esubero di offerta,esempio chi compra ai massimi ed è in perdita per piu tempo al primo rimbalzo venderà e quindi scatenerà un ulteriore futura discesa , quindi sarà piu difficile poi avere un creazione di trend crescenti (attenzione ,difficile ma non impossibile .
              
              
              parametro 4: 
              ALLEATI  e COMPETITORS : Bisogna valutare allo stesso modo anche 'colleghi' quindi progetti dello stesso settore comprendendo che non è detto che la salita di uno porti la discesa di un'altro , anzi molte volte tra 'colleghi' ci sono collaborazioni e quindi è probabile la crescità in simultanea.
              quindi è molto importante anche trovare dei progetti simili con maggior potenziale del progetto inizialmente scelto.
              
              parametro 5 , il piu importante:
              Tokenomics:
              questi sono i parametri quantificabili  che fanno da driver di domanda  e offerta.
              come filtro per capire la reale domanda bisogna capire cosa sostiene la domanda qindi la voglia di acquistare quel token; mentre per l'offerta è importante capire quanti token esistono ( supply) quanti token vengono creati ogni mese (inflazione ), quanti ne verranno sbloccati in futuro, le riduzioni dell'offerta , quindi burn (distruzione di parte della supply,processo che ne fa aumentare il valore), buyback del team quindi il ricomprare nuove quantità per tenerne stabile il valore .
              quindi valutare questi parametri e capire se nel tempo il valore è destinato a salire o meno, e in seguito comparare con i 'colleghi' del settore e magari capire se possano riflettere lo stesso andamento di 'colleghi' che hanno avuto gia successo .
              importante inoltre è anche capire gli holder del progetto , quindi quanti token sono in staking e quindi bloccati poichè questo ne renderà , meno volatile il valore ;altrettanto importante sapere la provenienza la durata  e la quantità gli incentivi;  è bene capire i benefit che puo dare un token solo possedendolo e tutti i pro e i contro che comporta possederlo.
              
              
              
              tabella esempi 
              
              
              
              
              
              <h2>CONCLUSIONI</h2>
              
              bisogna capire il reale valore del token,evitare i token mossi solo da speculazione .
              ricordare che le ICO e pre sale sono scommesse poichè sono progetti nuovi che non hanno ancora uno storico valutabile , e che bisogna segliere con cura le alt coin poichè le buone e quelle di successo sono poche .
              
              
              `}
            />
            <Footer />
          </Route>
          <Route path={"/take-profit-stop-loss"}>
            <Header />
            <GuidaPage
              titolo="Take Profit & Stop Loss"
              contenuto={`
              <h2>7 TAKE PROFIT & STOP LOSS</h2>

              Come abbiamo già avuto modo di parlare e condividere nel corso di alcuni precedenti appuntamenti con  questa guida , uno dei più importanti concetti che è fondamentale conoscere quando si avvia la propria personale percorso nel mondo crypto è rappresentato dall’opportuna gestione del denaro. Fondamentale è capire cos’è lo stop loss e  cos’è il take profit e quali sono le loro definizioni.
             
             <h2>7.1 STOP LOSS </h2>

             Lo stop loss è probabilmente il migliore amico del trader, ripeto trading poichè per chi hodla l'unico strumento importante oltre alla pazienza è il take profit che ci porta ai nostri obbiettivi prestabiliti e desiderati.
             Il significato dello stop loss è letteralmente in italiano “fermare la perdita”, ciò ci aiuta a capire come veramente sia uno strumento utile per tutti i trader.
             Lo stop loss è una funzione disponibile su praticamente ogni piattaforma di trading, che può essere impostata o meno per ogni operazione.

             lo stop loss serve a proteggere un investimento riducendo il livello di rischio. In pratica, si tratta di un livello di prezzo impostato dopo aver aperto la propria operazione. Se tale livello viene raggiunto mentre la posizione è aperta, allora la piattaforma di trading si occuperà di chiudere la tua posizione in automatico.
             Ovviamente questo livello di prezzo impostato per lo stop loss viene scelto nella direzione opposta dove dovrebbe muoversi il prezzo. 
             Ovvero:  

             Se apri una posizione long (rialzista), lo fai perché credi che vi sarà un rialzo nel prezzo di un asset. Perciò imposterai lo stop loss nella direzione opposta, per proteggerti dall’eventualità che invece accada un ribasso nel prezzo.

             Se apri una posizione short (ribassista), lo fai perché credi che vi sarà un ribasso nel prezzo di un asset. Perciò imposterai lo stop loss nella direzione opposta, per proteggerti dall’eventualità che invece accada un rialzo nel prezzo.     

             Insomma, lo stop loss viene usato per limitare le perdite nel caso che il prezzo si muova nella direzione opposta a quella prevista. Non solo, se lo stop loss viene raggiunto sarà proprio la piattaforma di trading a chiudere l’operazione in automatico: un’altra sicurezza in più, in caso non ci si trovi davanti al computer.             
             Il vantaggio principale di avere uno stop loss è quello di poter calcolare in anticipo, seguendo una propria strategia di trading, la cifra massima che si è disposti a perdere sul proprio investimento.
             
             Senza stop loss si rischierebbe di cadere vittima delle proprie emozioni: magari si vede la propria operazione in perdita, però si continua a tenerla aperta pensando (e sperando) che prima o poi il prezzo tornerà a salire.
             Non puoi immaginare quanti trader hanno bruciato migliaia e migliaia di euro in questo modo, decidendo di tenere aperte posizioni in perdita. Se in quei casi avessero impostato uno stop loss, avrebbero evitato di perdere molto denaro.
             
             <h2>7.2 TAKE PROFIT</h2>

             Ora che abbiamo capito cos’è lo stop loss, bisogna passare al concetto successivo e capire come funziona il take profit. Anche il take profit è disponibile su ogni piattaforma di trading, e lo puoi impostare ogni volta che apri un’operazione. Ovviamente è consigliato per chi fa TRADING  impostare sempre sia lo stop loss sia il take profit.
             Se lo stop loss serve a proteggere un investimento da un’eventuale perdita, il take profit serve ad assicurare dei profitti al trader. Si tratta infatti di un livello di prezzo che viene impostato nella direzione in cui si è previsto che si muoverà il prezzo. Proprio come avviene con lo stop loss, se il livello di take profit viene raggiunto mentre la posizione è aperta, allora la piattaforma di trading si occuperà di chiudere la tua posizione in automatico.
             Il significato di take profit in italiano può essere definito con “prendere il profitto“.

             Se apri una posizione long (rialzista), lo fai perché credi che vi sarà un rialzo nel prezzo di un asset. Perciò imposterai il take profit nella direzione prevista, per assicurarti i potenziali profitti
             Se apri una posizione short (ribassista), lo fai perché credi che vi sarà un ribasso nel prezzo di un asset. Perciò imposterai il take profit nella direzione prevista, per assicurarti i potenziali profitti
             Per comprendere al meglio il take profit bisogna però spiegare il concetto di “assicurarsi i profitti”. Può suonare strano infatti, e viene lecito domandarsi “Perché dovrai mettere un limite ai miei potenziali guadagni?”.
             Il motivo dietro il take profit è lo stesso che c’è dietro lo stop loss.
             
             Anche il livello di take profit è un livello che calcoli in anticipo, seguendo la tua strategia di trading. Equivale alla cifra che sei disposto a guadagnare per la tua operazione e con la quale ti ritieni soddisfatto.
             Sapere questa cifra, così come sapere quella che saresti disposto a perdere, ti permetterà di impostare stop loss e take profit correttamente. Grazie a questi due strumenti potrai infatti tenere sotto controllo i tuoi potenziali guadagni e perdite previste, e gestire così al meglio il tuo capitale anche nel lungo termine.             
             Inoltre “assicurarsi i profitti” non è così facile come sembra. La prima cosa che uno si sente di fare quando si ritrova con un’operazione aperta ed in guadagno, è quello di “lasciarla correre”, senza porre limiti ai potenziali profitti. Ma cosa succede se dopo poco i prezzi cambiano direzione?            
             Probabilmente si sarà tentati di aspettare finché i prezzi non tornino almeno ai livelli precedenti, quando avevamo deciso di lasciar correre la nostra operazione. E se i prezzi non tornano mai a quei livelli ma anzi, cambiano direzione e si muovono nella direzione opposta causandoci una perdita?             
             
             Come puoi ben vedere, avere un livello di take profit ci solleva da tutti questi dubbi e problemi. È sempre meglio calcolare a mente lucida i livelli di stop loss e take profit, per poi evitare di incorrere in spiacevoli situazioni come quella mostrata qui sopra.
                         
             <h2>7.3 COME E PERCHè USARE STOP LOSS E TAKE PROFIT</h2>
                         
             Prima di andare a discutere su come impostare gli stop loss e come impostare i take profit è bene soffermarsi un attimo sui potenziali rischi dovuti da uno scorretto utilizzo di questi due strumenti. Già, perché se da una parte possono essere di grande aiuto nel limitare le perdite e gestire al meglio il proprio capitale, dall’altra nascondono comunque dei rischi.             
             
             Come hai visto, sia gli stop loss, sia i take profit, sono livelli di prezzo che se raggiunti portano la piattaforma di trading a chiudere in automatico la tua operazione. In un caso per evitare ulteriori perdite, nell’altro per assicurarti dei profitti.             
             Il rischio principale quando si utilizzano questi due strumenti è quello di scegliere male i livelli di prezzo a cui impostarli. Per esempio, se si sbaglia l’impostazione dello stop loss è possibile che i prezzi, durante le loro normali oscillazioni, raggiungano questo livello portando alla chiusura automatica delle proprie operazioni.            
             Esempio. 
             
             Immaginiamo di avere investito al rialzo, ed aver impostato quindi lo stop loss per proteggerci da un ribasso. Peccato che abbiamo scelto un livello troppo vicino all’andamento attuale dei prezzi, che con delle normali oscillazioni toccano il nostro livello di stop loss facendo chiudere in automatico l’operazione.            
             Ma come detto, si trattava di normali oscillazioni. Infatti, poco dopo il prezzo comincia a salire ed ecco qua che ci siamo giocati dei potenziali profitti. Bisogna quindi evitare di posizione i propri stop loss troppo vicino all’andamento dei prezzi attuale, e bisogna quindi studiarsi i movimenti passati per capire il livello migliore a cui posizionarli.          
             Anche perché altrimenti si rischia di cadere nell’errore opposto, ovvero posizionare lo stop loss troppo lontano. Ciò significa che ci espone al rischio di subire maggiori perdite. È importante quindi trovare il giusto equilibrio, studiando proprio i grafici e analizzando i movimenti passati, ma anche livelli di minimi e massimi toccati dai prezzi.           
             Anche lo strumento del take profit non è esente da rischi. 
             
             Il take profit viene usato per assicurarsi dei profitti, e come abbiamo visto nel paragrafo precedente, sollevarci da molti potenziali dubbi e decisioni dettate dalle emozioni. Però anche in questo caso esiste sempre la possibilità di sbagliare.
             Anche in questo caso, gli errori possono capitare quando si imposta il livello di take profit troppo vicino oppure troppo lontano dall’andamento attuale dei prezzi.
             Nel primo caso, si rischia di “tagliare” fuori molti potenziali profitti. Immaginiamo di aver investito al rialzo, i prezzi salgono però toccano subito il nostro livello take profit: bene, operazione chiusa in automatico dalla piattaforma di trading e dei guadagni assicurati per noi.
             Peccato però che i prezzi continuano a salire, e anche di molto, facendoci quindi perdere dei profitti ottimi. Il problema quando si imposta un livello come il take profit, è che spesso entra in gioco il fattore “avidità“, dato che bisogno trovare un limite a dei guadagni (quando in realtà piacerebbe a tutti guadagnare senza limiti )
             Se si pone il limite troppo vicino, si rischia di avere l’effetto opposto a quello sperato. Così potrebbe venire spontaneo dire “ma allora mi conviene metterlo molto più lontano questo Take Profit”, pensando così di aumentare i propri profitti nelle future operazioni. 
             Ma anche in questo caso si farebbero solo danni. 
             
             Un livello di take profit troppo distante potrebbe non essere mai raggiunto, ciò significa che bisognerà chiudere l’operazione manualmente e quindi ci si esporrà alla fatidica domanda: “di quanto guadagno mi accontento?”. Quando in realtà è bene decidere tutto già a tavolino prima di aprire le proprie operazioni.
             Insomma, anche con il livello di Take Profit bisogna trovare il giusto equilibrio per evitare di commettere gli errori esposti qui sopra. Studiate sempre i grafici e i movimenti dei prezzi: solo così sarete in grado di trovare il livello giusto a cui impostare un livello di take profit.
             Una delle cose più difficili da fare quando si aprono nuove posizioni è determinare dove mettere l’ordine di stop loss.
             Ovviamente, individuare tali livelli con precisione non è affatto facile. Un primo spunto di condivisione che vogliamo però fornirvi è legato al fatto che quando andrete a impostare uno stop loss, vi sarà richiesta una ferrea disciplina, evitando di modificare il limite se le cose non stanno andando benissimo. Ad esempio, se avete inserito una posizione di acquisto, long, e il prezzo inizia a diminuire, non dovreste ovviamente abbassare il livello di stop loss nel tentativo di dare il tempo di mercato di recuperare, ottenendo un’esposizione al rischio più elevata di quanto avevate invece avuto modo di definire. Insomma, evitate che le vostre emozioni superino quanto predefinito, lasciando invariati gli ordini di stop loss in qualsiasi circostanza.

             Gli stop loss sono essenziali per qualsiasi buona riuscita della propria strategia e, soprattutto, per limitare i rischi di cui i trader neofiti non hanno ancora una piena consapevolezza.
             Non solo: oltre a consentire di ridurre al minimo le perdite, e rimanere pertanto sui mercati finanziari il più a lungo possibile con posizioni sostenibili, gli stop loss vi permetteranno di raggiungere un obiettivo indiscutibilmente importante: ridurre il livello di stress che il trading si porta dietro.
             Risulta infatti ben intuibile che mantenere una posizione di perdita senza una adeguata protezione sia in grado di aumentare significativamente il livello di stress, conducendo così il trader a pensieri irrazionali, soprattutto quando si tratta di un investitore non troppo esperto. Più il prezzo va in senso opposto rispetto a quanto desiderato, e più lo stress avrà modo di aumentare, fino ad arrivare a dominare la mente del trader.
             Fissando opportunamente gli stop loss, sarà possibile uscire dalle perdite in maniera rapida e automatica con perdite tollerabili, andando magari a compensarle velocemente immettendo altre posizioni più profittevoli, invece di concentrarsi su una posizione in perdita per giorni e giorni nella speranza che il prezzo improvvisamente inverta la tendenza.
             
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
