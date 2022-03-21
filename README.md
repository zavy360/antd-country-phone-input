# antd-country-phone-input

Country phone input component as standard Ant.Design form item.

## Installation

```bash
npm install @zavy360/antd-country-phone-input world_countries_lists
```

or

```bash
yarn add @zavy360/antd-country-phone-input world_countries_lists
```

## Usage

> **Breaking Changes:**
>
> 1. To avoid unnecessary encapsulation for different locales, `4.0` lifted areas state up to `ConfigProvider`(based on React Context). You need to put it in the right place(index.js/App.js/...), then all components will have access to the provided config.
> 2. `Tree Shaking` is supported in `4.1`, you need to install `world_countries_lists` explicitly. Thus, you could customize translation JSON and it is better than `areaMapper` in `ConfigProvider`.
> 3. `world_countries_lists` updated their file structure from [2.4.0](https://github.com/stefangabos/world_countries/releases/tag/2.4.0): `world_countries_lists/data/en/world.json` -> `world_countries_lists/data/countries/en/world.json`.

```tsx | pure
import CountryPhoneInput, {
  ConfigProvider,
} from '@zavy360/antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';

// Usually you only need to import ConfigProvider & CSS once in App.js/App.tsx
// CSS order is important!
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <CountryPhoneInput />
    </ConfigProvider>
  );
};

export default App;
```

### Value

| Field     | Type      | Note                                                               |
| --------- | --------- | ------------------------------------------------------------------ |
| short     | string    | See [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| phoneCode | number    |
| emoji     | ReactNode | National flag                                                      |
| name      | string    |

### Locale

See [`world_countries_lists`](https://github.com/stefangabos/world_countries)

### Updating

Make changes to the code base and then run and update the version in `package.json`

Push the changes to github then run:

`yarn prepack`

Then publish the updated package

`npm publish`
