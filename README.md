# ShopeME Front-end

- [Description](#description)
- [Quickstart](#quickstart)
- [Wymagania](#wymagania)
- [Stack technologiczny](#stack-technologiczny)
- [Struktura projektu](#struktura-projektu)
- [Skrypty](#skrypty)

## Description

ShopMe is a web application that allows you to add offers for various types of services. 


## Quickstart

Jednorazowo: `yarn install`

Wersja deweloperska: `yarn run server` i `yarn run client:dev`

Wersja produkcyjna: `yarn run client:prod`

Dostępne adresy:

- [http://localhost:3000](http://localhost:3000) aplikacja frontowa
- [http://localhost:3001](http://localhost:3001) serwer mockowy
- [http://localhost:3001/ui](http://localhost:3001/ui) przeglądarka Swaggera (z serwer mockowy)


## Wymagania

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)


## Stack technologiczny 

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React Router V4](https://github.com/ReactTraining/react-router)
- [react-i18next](https://github.com/i18next/react-i18next)
- [pokemock](https://github.com/mobilcom-debitel/pokemock)


## Pliki konfiguracyjne

- [.editorconfig](http://editorconfig.org)
- [.env](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)
- [.eslintrc](https://eslint.org)
- [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)


## Struktura projektu

Struktua projektu została oparta na pomyśle zaprezentowanym na (https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)

```
shop-me-frontend/
  docs/
  public/
    locales/
      <język>/
        translations.json
    index.html
  src/
    components
      <nazwa komponentu>
        <nazwa subkomponentu>
          <subkomponent>.css
          <subkomponent>.jsx
          <subkomponent>.test.jsx
      UI
        <nazwa elementu UI>
          <element UI>.css
          <element UI>.jsx
          <element UI>.test.jsx
    core
      App.jsx
      i18n.js
      Router.jsx
    screens
      <nazwa screena>
        <nazwa screena>.jsx
        <nazwa screena>.test.jsx
    index.js
    setupTests.js
  swagger/
    <specyfikacja>.<yaml|json>
  package.json
  README.md
```

`docs/` to dodatkowa, bardziej szczegółowa dokumentacja poszczególnych modułów

`public/locales` zawiera subkatalogi odpowiadające wsperianym językom aplikacji. Tłumaczenia przechowywane są w plikach `translations.json` których struktura odpowiada strukturze aplikacji.

`src/components` w katalogach odpowiadającym modułom lub funkcnjonalnościom aplikacji przechowuje ich komponenty. Komponenty nazwa są relatywnie do katalogu components lub UI, np. src/components/UI/ExampleTitle/ExampleTitle.jsx nazywać będzie się ExampleTitle, a src/components/Examples/IPAddress/IPAddress.jsx ExamplesIPAddress

`src/components/UI` przetrzymuje generyczne komponenty używane przez komponenty ekranów jak i same ekrany. Komponenty UI nigdy nie powinny ładować komponentów spoza katalogu UI.

`src/screens` przetrzymuje ekrany zgodnie ze ścieżką routingu, np. /examples/hello znajdzie się w src/screens/Examples/Hello, a komponenty nazywane się zgodnie z relatywną ścieżką od src/, np ScreensExamplesHello (pozwala to uniknąć możliwej kolizji nazw z src/components)

`src/core/App.jsx` to głowny komponent

`src/core/i18n.js` to kofiguracja i18next-react

`src/core/Router.jsx` to konfiguracja/komponent routingu

`*.test.jsx` to test zarówno komponentów jak i ekranow


## Skrypty

W katalogu projektu można uruchomić:

### `yarn run start:prod`

Uruchamia aplikację kliencką z dostępem do serwera produkcyjnego

### `yarn run client`

Uruchamia aplikację kliencką. Wymaga ustawienia zmiennej środowiskowej REACT_APP_API

### `yarn run test`

Uruchamia testy jednostkowe

### `yarn run test`

Uruchamia testy jednostkowe i pokazuje tabelę pokrycia kodu testami

### `yarn run build`

Tworzy build produkcyjny w katalogu `build`

### `yarn storybook`

Uruchamia serwer storybook'a

### `yarn eslint`

Uruchamia eslinta dla plików .js i .jsx