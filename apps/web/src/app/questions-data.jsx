

let xd = 1;
export const data = {
  questions: [
    {
      id: 1,
      title: 'Javascript - asynchroniczny czy synchroniczny? Kiedy jest jaki oraz jaka jest różnica? Podaj przykłady.',
      answer:
`
<p>Javascript może być zarówno synchroniczny, jak i asynchroniczny. Przez większość czasu używamy go w sposób
synchroniczny.</p>
<br>
<p>Asynchroniczny jest wtedy, kiedy pozwala na <b>non-blocking code execution</b>, czyli zamiast czekania na wykonanie
 się operacji, przechodzi do kolejnej, natomiast aktualna instrukcja trafia do <b>Web API</b>.</p>
<br>

<p>Przykłady kiedy Javascipt jest asynchroniczny:</p>
<ol>
<li>AJAX requests</li>
<li>setTimeout, setInterval</li>
<li>Promises</li>
</ol>


<br>
<p>Przykłady kiedy Javascipt jest synchroniczny:</p>
<ol>
<li>Kiedy używamy for loopa, żeby przeiterować listę z obkiektami</li>
<li>Kiedy zwracamy wartość z funkcji i przeglądarka czeka na wykonanie dużych kalkulacji</li>
</ol>

<br>

`,
      keywords: [],
      category: ['javascript'],
    },
    {
      id: 2,
      title: 'Czym jest synchroniczność w Javascript?',
      answer:
        `
<p>Synchroniczność oznacza, że kod wykonuje się w określonej sekwencji instrukcji podanych w programie. Każda poprzednia instrukcja czeka na wykonanie poprzedniej instrukcji. Np.</p>
<code>console.log(\'Hello\');</code><br>
<code>console.log(\'World\');</code>
`,
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 3,
      title: 'Czym jest asynchroniczność w Javascript?',
      answer: `<p>Asynchroniczność oznacza, że kod wykonuje się nie czekając na wykonanie poprzednich instrukcji. Np.</p>
        <code>console.log(\'Pierwszy\');</code><br>
        <code>setTimeout(() => console.log(\'Drugi\'), 2000);</code><br>
        <code>console.log(\'Trzeci\');</code><br>

        <p>W tym wypadku kolejność wykonania będzie różna. Wyświetli się \'Pierwszy\', \'Trzeci\', \'Drugi\'.</p>`,
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 4,
      title: 'Jaka jest róznica pomiędzy synchronicznym i asynchronicznym Javascriptem?',
      answer: `
        <ul>

        <li>
       Synchroniczne instrukcje wykonują się w podanej sekwencji. Instrukcje w asynchronicznym JS nie wykonują się jedna po drugiej.
        </li>


        <li>
      Synchroniczne Instrukcje czekają na wykonanie się poprzedniej instrukcji. Asynchroniczne instrukcje nie czekają na wykonanie się poprzedniej instrukcji najpierw zostaja wykonane np. odczekuja 2sekundy

        (bo setTimeout), potem trafiaja do kolejki mikro albo makro taskow, a nastepnie jesli call stak jest pusty, zostaja pobierane taski z kolejek - pierwsza kolejnosc ma mikro i trafiaja na call stack.
        </li>


        <li>
        Większość czasu Javascript używa synchronicznego kodu. Natomiast asynchroniczny Javacript jest preferowany w sytuacjach kiedy wykonanie kodu zostaje zablokowane w sposób nieokreslony.
        </li>

        </ul>`,
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 5,
      title: 'Jak wywołać kilka wątków w javascript?',
      answer: 'Javascript nie wspiera wielowątkowości - nic się nie da z tym zrobić w czystym Javascript, ponieważ we wszystkich przeglądarkach Javascript wywołuje się w jednym wątku.',
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 6,
      title: 'Co to jest promise?',
      answer: 'Obiekt, który reprezentuje ewentualne zakończenie (lub niepowodzenie) asynchronicznej operacji - zwracając wartość.',
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 7,
      title: 'Jakie stany ma promise?',
      answer: `pending - odpalenie promista <br><br>fulfilled - operacja zakonczona powodzeniem <br><br>rejected- operacja zakonczona porazka`,
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 8,
      title: 'Jakie są różnice pomiędzy promisem, a observablem?',
      answer: `Promisy emitują tylko jedną wartość w czasie, natomiast observable mogą emitować ich wiele <br><br>Promisy nie są leniwe - odpalają się od razu po stworzeniu, natomiast observable nie emitują nic dopóki ich nie zasubskrybujesz.
        (Emitują jak są hot) <br><br>
        Promisów nie można anulować, natomiast observable mają subskrybcje, które można anulować, żeby przestał emitować dalsze wartości <br><br>
        Promise nie ma żadnych operatorów (poza funcjami all, allSettled, any, reace, może poza then, który chainuje promisy i response.json(), który konwertuje response z promisa do jsona), natomiast observable ma pełno operacji, takich jak: map, retry, filter i więcej`,
      keywords:[],
      category: ['javascript', 'rxjs'],
    },
    {
      id: 9,
      title: 'Rozwiń skrót rest',
      answer: 'REST jest akronimem od REpresentational State Transfer',
      keywords:[],
      category: ['networks'],
    },
    {
      id: 10,
      title: 'Co ma wspólnego protokoół HTTP z REST?',
      answer: 'REST jest rozwiązaniem architektonicznym, które z owego protokołu http korzysta. REST nie jest synonimem HTTP. ',
      keywords:[],
      category: ['networks'],
    },
    {
      id: 11,
      title: 'Jakie są reguły RESTful?',
      answer: 'Nie ma oficjalnego standardu REST, a jedynie zbiór reguł, z których można korzystać lub nie. \n' +
        '- Jednolity interfejs komunikacyjny\n' +
        'Serwer powinien udostępiać API, które będzie rozumiane przez wiele aplikacji - czyli np. serwer obsługuje zapytania HTTP dla aplikacji mobilnych, aplikacji desktopowych, stron www itd.\n' +
        '\n' +
        '- Podział na aplikacje klient-serwer\n' +
        'Rozdzielenie aplikacji pozwala na ich niezależny rozwój i działanie. Taki podział zwiększa możliwości skalowania i rozszerzalności.\n' +
        '\n' +
        '- Bezstanowość (Stateless)\n' +
        'Oznacza to, że po stronie serwera nie powinno być mechanizmów przetrzymujących dane klienta, które byłby by potrzebne do poprawnego działania systemu. API nie powinno trzymać stanu aplikacji, a jedynie interpretować informacje przesłane przez klienta. Klient powinien wysyłać tylko komplet informacji potrzebnych do poprawnego wykonania żądania (request)\n' +
        '\n' +
        'Reguła ta jest mocno powiązana z sesją użytkownika, która często jest realizowana po stronie serwera. W przypadku RESTful API, każdy request, który trafia do serwera powinien zawierać w nagłówku token, np. JWT. To na jego podstawie API decyduje, czy request zostanie przyjęty czy odrzucony.\n' +
        '\n' +
        '- CDN. Cacheability',
      keywords:[],
      category: ['networks'],
    },

    {
      id: 12,
      title: 'Do czego służy protokół http i https?',
      answer: `Są to protokoły przesyłania dokumentów hipertekstowych (stron WWW) (http:port 80, https:443).<br><br> Protokół https dodatkowo wkykorzystuje protokoły szyfrujące TLS lub SSL`,
      keywords:[],
      category: ['networks'],
    },

    {
      id: 13,
      title: 'Jakie znasz protokoły sieciowe?',
      answer: `HTTP Protokół przesyłania dokumentów hipertekstowych (stron WWW) 80 <br><br>
        HTTPS Szyfrowany protokół HTTP wykorzystujący protokoły szyfrujące TLS lub SSL 443<br><br>
        POP3 Protokół odbierania poczty elektronicznej 110 (szyfrowany 995)<br><br>
        IMAP Protokół odbierania poczty elektronicznej umożliwiający zarządzanie folderami znajdującymi się w skrzynce pocztowej 143 (szyfrowany 993)<br><br>
        SMTP Protokół wysyłania poczty elektronicznej 25 (szyfrowany 465 lub 587)<br><br>
        FTP Protokół przesyłania plików 21 (polecenia) i 20 (pliki) <br><br>
        FTPS Szyfrowany protokół FTP 990<br><br>
        SSH Szyfrowany protokół połączenia terminalowego 22<br><br>
        DNS Protokół zamiany nazw domenowych na adresy IP 53`,
      keywords:[],
      category: ['networks'],
    },

    {
      id: 14,
      title: 'Co to jest OWASP?',
      answer: 'Open Web Application Security Project® (OWASP) to fundacja non-profit, której celem jest poprawa bezpieczeństwa oprogramowania.',
      keywords:[],
      category: ['security'],
    },
    {
      id: 15,
      title: 'Co zapewnia OWASP?',
      answer: 'Narzędzia i zasoby (wszystko open source)\n' +
        'Duże community, każdy ma wstęp, każdy może coś dać od siebie\n' +
        'Edukacyjne blogi, filmiki, kursy i treningi\n' +
        'Nowa lista błędów i niebezpieczeństw co kilka lat',
      keywords:[],
      category: ['security'],
    },
    {
      id: 16,
      title: 'Gdzie najczęściej angular staje się podatny na tak wirusów?',
      answer: 'Używanie blibliotek z vulnerabilities (brak aktualizacji paczek)\n' +
        'Zła autoryzacja użytkowników (robiona od zera, jeśli jest tyle dobrych providerów)\n' +
        'Cross-site script (XSS) np. {{ trustedData }} (domyślnie angular zapobiega temu)\n' +
        'Zepsute kontrolowanie dostępów do aplikacji\n' +
        'Źle zrobiona konfiguracja (np. hasła przetrzymywane w kodzie)\n' +
        'Brak monitoringu i logowania',
      keywords:[],
      category: ['security'],
    },
    {
      id: 17,
      title: 'Który operator użyć w przypadku gdy chcemy aby zapytanie HTTP nie zostało przerwane przy emisji nowej wartości zewnętrznego observabla?',
      answer: 'exhaustMap',
      keywords:[],
      category: ['rxjs'],
    },
    {
      id: 18,
      title: 'Jakie są 2 główne typy operatorów w rxjs?',
      answer: 'Pipeable oraz Creation operatory.\n' +
        'Pipeable operator to taki operator który może zostać użyty w następujący sposób: observableInstance.pipe(operator()).\n' +
        'Pipeable operatory są funkcjami czystymi (pure function), które przyjmują jeden observable jako parametr i zwracają nowego observabla.\n' +
        'Wejściowa instancja observabla zostaje nienaruszona.\n' +
        'Creation operator to taka funkcja która jest w stanie stworzyć nowego observabla.',
      keywords:[],
      category: ['rxjs'],
    },
    {
      id: 19,
      title: 'Czym jest High-Order Observable?',
      answer: 'Jest to taki observable który zwraca innego observabla (np. mergeMap)',
      keywords:[],
      category: ['rxjs'],
    },
    {
      id: 20,
      title: 'Jaka jest różnica pomiędzy mergeMap i concatMap?',
      answer: 'concatMap zachowuje kolejność wartości w strumieniu i na wyjściu subskrybent otrzyma wartości w tej samej kolejności.\n' +
        'Natomiast w przypadku mergeMap ta kolejność nie jest zachowana i gdy jakiś wewnetrzy observable wyemituje wartość, to od razu ta wartość jest przekazywana do subskrybenta\n',
      keywords:[],
      category: ['rxjs'],
    },
    {
      id: 21,
      title: 'Dlaczego stworzono High-Order mapping operators?',
      answer: `

      <p>Stworzono je w celu uniknięcia zagnieżdzonych subskrybcji.</p>
      <br>
      <p>np. switchMap(...), mergeMap(...)</p>



      `,
      keywords:[],
      category: ['rxjs'],
    },
    {
      id: 22,
      title: 'Co to jest event bubbling?',
      answer: 'Kiedy zdarzenie ma miejsce na elemencie, najpierw uruchamia procedury obsługi na nim, następnie na jego rodzicu, a następnie na wszystkich przodkach. Od głębszego do najpłytszego.',
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 23,
      title: 'Jak działa event.stopPropagation()?',
      answer: 'Zatrzymuje event bubbling w miejscu wywołania',
      keywords:[],
      category: ['javascript'],
    },
    {
      id: 24,
      title: 'Co się stanie gdy chcemy się zasubskrybowac do Subject\'a na którym wczesniej wywolaliśmy `complete()` lub `unsubscribe()`',
      answer: `Jeśli damy unsubscribe i po nim subscribe lub next to wyrzuci error ObjectUnsubscribedError.
      Natomiast jesli damy complete i po nim pozniej subscribe lub next to wartosci nie beda sie juz emitowac (nic sie nie stanie)`,
      keywords:[],
      category: ['rxjs'],
    },

    {
      id: 26,
      title: 'Czy dyrektywa może mieć ChangeDetection.OnPush',
      answer: '<p>odpowiedz</p>',
      keywords:[],
      category: ['rxjs'],
    },

    {
      title: 'Czym różni się complete od unsubscribe?',
      answer: `
        <p>Complete jest metodą obiektu <b>Observable</b>. Wywołanie tej metody powoduje, że obiekt typu Observable przestaje wysyłać lub przyjmować wartości (jest skończony).</p><br>
        <p>
        Unsubscribe(...) - natomiast jest metodą obiektu <b>Subscription</b>. Kiedy subskrybujemy się do obiektu typu Observable przy pomocy metody subscribe(...),
        otrzymujemy referencję do tej subkrybcji. Jeżeli chcemy przestać obserwować źródło danych to wywołujemy metodę unsubscribe na obiekcie Subscription.
        </p>
        `,
      keywords: [],
      category: ['rxjs']
    },
    {
      title: 'Czym jest View Encapsulation w Angularze?',
      answer: `
        <p>
            Jest to sposób ograniczenia zasięgów selektorów stylu dla komponentu. Występują 3 startegie View Encapsulation w Angularze:
            <ul>
                <li>ViewEncapsulation.ShadowDom</li>
                <li>ViewEncapsulation.Emulated - domyślny</li>
                <li>ViewEncapsulation.None</li>
            </ul>
        </p>
        `,
      keywords: [],
      category: ['Angular', 'CSS', 'View Encapsulation']
    },
    {
      title: 'Jak działa ViewEncapsulation.ShadowDom?',
      answer: `
        <p>Komponent jest umieszczany wewnątrz elementu ShadowRoot co powoduje izolacje komponentu i jego stylów z głównego drzewa DOM strony. Uwaga: działa tylko dla przeglądarek które wspierają ShadowDOM.</p>
        `,
      keywords: [],
      category: ['Angular', 'CSS', 'View Encapsulation']
    },
    {
      title: 'Jak działa ViewEncapsulation.Emulated?',
      answer: `
        <p>Domyślny sposób enkapsulacji widoku w Angularze. Mechanizm działa w taki sposób, że każdy element wewnątrz komponentu zostaje oznaczony przy pomocy atrybutu (ng-host-{unikatowe id} lub ng-content-{unikatowe id}).
        Następnie selektory CSS które są przypisane do komponentu są modyfikowane z użyciem atrybutów-znaczników co powoduje że nowe selektory CSS są unikalne dla elementów komponentu i działają tylko na nie.
        </p>
        `,
      keywords: [],
      category: ['Angular', 'CSS', 'View Encapsulation']
    },
    {
      title: 'Jak działa ViewEncapsulation.None?',
      answer: `
        <p>ViewEncapsulation.None powoduje że selektory CSS dla danego komponentu i jego zawartości nie są unkalne i mogą zmienić style elementów nie należących do komponentu</p>
        `,
      keywords: [],
      category: ['Angular', 'CSS', 'View Encapsulation']
    },

    {
      title: 'Jak działa forkJoin w rxjs?',
      answer: `
        <p>
            frokJoin jest jednym z operatorów który służy do grupowania wyników wielu observabli.
            forkJoin emituje tablice zawierającą wartości wyemitowane przez każdgo z obserwabla.
            Jest jeden warunek: by forkJoin wyemitował tablice kązdy z obserwabli musi się skończyć. Wtedy forkJoin zbiera ostatnie wartości wyemitowane z każdego z obserwabla.
            Kolejność w jakiej wartości znajdują się w tablicy jest taka sama w jaki sposób observable zostałe przekazane do parametru forkJoin.
        </p>
        `,
      keywords: [],
      category: ['rxjs']
    },
    {
      title: 'Czym jest BehaviorSubject?',
      answer: `
        <p>
            Jest to rodzaj Subject'a który wymaga podania wartości pozątkowej i emituje obecną wartość w chwili gdy ktokolwiek zasubskrybuje się do obiektu.
            Początkowa wartość jest przekazywana przy inicjalizacji. Jeżeli przekażemy nową wartość za pomocą metody next() wartość początkowa zostanie nadpisana.
            Każdy kolejny obserwator przy subskrybcji dostanie aktualną wartość.
        </p>
        `,
      keywords: [],
      category: ['rxjs']
    },
    {
      title: 'Czym jest pseudo class w CSS? Jakie znasz rodzaje pseudo class?',
      answer: `
        <p>Jest to klasa która jest dodawana do selektora CSS która wskazuje specjalny stan w którym znajduje się element na stronie.
        Pseuda klasa zawiera dwukropek ':' i nazwę pseudo klasy za dwukropkiem.
        Przykłady pseuda klas:
            <ul>
                <li>:hover</li>
                <li>:active</li>
                <li>:focus</li>
                <li>:is()</li>
                <li>:not()</li>
                <li>:root</li>
                <li>:valid/:invalid</li>
                <li>:checked</li>
                <li>:root</li>
                <li>:nth-child</li>
                <li>:first-child</li>
                <li>:last-child</li>
            </ul>
        </p>
        `,
      keywords: [],
      category: ['CSS']
    },

    {
      title: 'Jak działa forkJoin w rxjs?',
      answer: `
        <p>
            frokJoin jest jednym z operatorów który służy do grupowania wyników wielu observabli.
            forkJoin emituje tablice zawierającą wartości wyemitowane przez każdgo z obserwabla.
            Jest jeden warunek: by forkJoin wyemitował tablice kązdy z obserwabli musi się skończyć. Wtedy forkJoin zbiera ostatnie wartości wyemitowane z każdego z obserwabla.
            Kolejność w jakiej wartości znajdują się w tablicy jest taka sama w jaki sposób observable zostałe przekazane do parametru forkJoin.
        </p>
        `,
      keywords: [],
      category: ['rxjs']
    },
    {
      title: 'Czym jest BehaviorSubject?',
      answer: `
        <p>
            Jest to rodzaj Subject'a który wymaga podania wartości pozątkowej i emituje obecną wartość w chwili gdy ktokolwiek zasubskrybuje się do obiektu.
            Początkowa wartość jest przekazywana przy inicjalizacji. Jeżeli przekażemy nową wartość za pomocą metody next() wartość początkowa zostanie nadpisana.
            Każdy kolejny obserwator przy subskrybcji dostanie aktualną wartość.
        </p>
        `,
      keywords: [],
      category: ['rxjs']
    },
    {
      title: 'Czym jest pseudo class w CSS? Jakie znasz rodzaje pseudo class?',
      answer: `
        <p>Jest to klasa która jest dodawana do selektora CSS która wskazuje specjalny stan w którym znajduje się element na stronie.
        Pseuda klasa zawiera dwukropek 🙂) i nazwę pseudo klasy za dwukropkiem.
        Przykłady pseuda klas:
            <ul>
                <li>:hover</li>
                <li>:active</li>
                <li>:focus</li>
                <li>:is()</li>
                <li>:not()</li>
                <li>:root</li>
                <li>:valid/:invalid</li>
                <li>:checked</li>
                <li>:root</li>
                <li>:nth-child</li>
                <li>:first-child</li>
                <li>:last-child</li>
            </ul>
        </p>
        `,
      keywords: [],
      category: ['CSS']
    },

    {
      title: 'Czym różni się any od unknown?',
      answer: `
        <p>
            Any i unknown są typami wprowadzonymi przez TypeScript. Do zmiennych zadeklarowanych jako typ any lub unknwon możemy przypisać wartość dowolnego innego typu (number, string, boolean, function, object itp.).
            Różnica jest taka że w przypadku any możemy wywołać dowolną metodę na obiekcie i kompilator nie będzie wstanie określić czy metoda należy do obiektu lub nie. Błąd pojawi się dopiero podczas runtime'u.
            W przypadku unknown metoda może zostać wywołana po uprzednim sprawdzeniu typu. Jeżeli typ nie został sprawdzony kompilator zgłosi błąd.
            (Typ any obecny jest od początku; Typ unknown został wprowadzny w wersji 3.0)
        </p>
        `,
      keywords: [],
      category: ['typescript']
    },
    {
      title: 'Jak działa HostListener?',
      answer: `
        <p>
            HostListener jest dekoratorem w którym wskazuje się zdarzenie DOM na które ma reagować metoda która jest oznaczona dekoratorem.
            Przykład:
            <code>
            @Directive({selector: 'button[counting]'})
            class CountClicks {
                numberOfClicks = 0;

                @HostListener('click', ['$event.target'])
                onClick(btn) {
                  console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
                }
              }
            </code>
            W przykładzie powyżej button z dyrektywą counting przy każdym kliknięciu będzie zliczać kliknęcia.
        </p>
        `,
      keywords: [],
      category: ['Angular']
    },
    {
      title: 'Czym różni się drzewo hierarhi ModuleInjector od drzewa ElementInjector? Jak działa DI w Angularze?',
      answer: `
        <p>
            Drzewo ModuleInjector powstaje dla modułów (klasy z dekoratorem @NgModule) oraz serwisów oznaczonych dekoratorem @Injectable który zawiera pole providedIn.
            Natomiast drzewo ElementInjector tworzone jest dla komponentów i dyrektyw gdzie możemy dostarczyć dependencje przy pomocy pola providers lub viewProviders.
            Drzewo ElementInjector jest podobne do drzewa DOM i struktury jaką tworzą widoki komponentów/dyrektyw.
            Rozpoznanie wstrzykiwanej zależności zaczyna się od sprawdzenia drzewa ElementInjector od komponentu/dyrektywy która potrzebuje zależności i
            przeszukuje ElementInjector rodzica aż do elementu najwyższego. Jeżeli nie znajdzie dependencji w drzewie ElementInjector, zaczyna przeszukiwanie drzewa ModuleInjector od modułu w którym
            komponent/dyrektywa jest zadeklarowany. Przeszukiwanie drzewa trwa do znalezienia dependencji lub dotarcia do NullInjectora.
        </p>
        `,
      keywords: [],
      category: ['Angular']
    },
    {
      title: 'Czym jest NullInjector?',
      answer: `
        <p>
            NullInjector jest najwyższym elementem drzewa w hierarchii injectorów.
            Jeżeli podczas przeszukiwania drzewa injectorów Angular dojdzie do NullInjectora to Angular wystąpi błąd ponieważ szukana dependencja nie istnieje
            (chyba że dependencja jest oznaczona dekoratorem @Optional() wtedy dostaniemy null)
        </p>
        `,
      keywords: [],
      category: ['Angular']
    },


    {
      title: 'Czy promise może być synchroniczny? Jak stworzyć?',
      answer: `
        <p>
          Promise jest stworzony do asynchronicznych operacji. Nie da się go używać synchronicznie.
        </p>
        `,
      keywords: [],
      category: ['javascript']
    },




  ].map(pytanie => {
    pytanie.id = xd;
    xd++;
    return pytanie;
  })
}
