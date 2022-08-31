# styled-system-extends

Набор синтаксического сахара для стилизации `компонента`/`нативного тега`
на основе [styled-components](https://styled-components.com/),
а также [styled-system](https://styled-system.com/) и его пакетов
(например [@styled-system/css](https://github.com/styled-system/styled-system/tree/master/packages/css)).

## Использование

### Импорт

```
import { styled } from 'styled-system-extends';
```

### Вызов

```
styled(target, ...styles);
```

> `target` - целевой объект
>
> `styles` - аргументы, по умолчанию относятся к `styled.css`.

### Типизация

#### Тип стилизованного компонента

`styled-components` возвращает следующий тип стилизованного компонента:

```tsx
type StyledComponent<C, T, O, A> =
  // the "string" allows this to be used as an object key
  // I really want to avoid this if possible but it's the only way to use nesting with object styles...
  string
  & StyledComponentBase<C, T, O, A>
  & hoistNonReactStatics.NonReactStatics<C extends React.ComponentType<any> ? C : never>;
```

где:

- `C` - тип стилизуемого компонента,
- `T` - тип темы (по умолчанию `DefaultTheme`),
- `O` - тип props (по умолчанию пустой объект `{}`),
- `A` - тип (по умолчанию `never`).

`styled-components` применяет [hoistNonReactStatics](https://www.npmjs.com/package/hoist-non-react-statics)
для пробрасывания статичных не-реактовских свойств от стилизуемого компонента к стилизованному компоненту
([подробнее](https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)).

#### Props компонента

```tsx
type ComponentProps = { ... };

const Component = styled<ComponentProps>('div');
```

### Целевой объект

#### Нативные теги

(Стилизацию можно проверить по наличию селекторов вида `.sc-***`).

<Canvas className='canvas'>
  <Story id='utils-styled-about--native' />
</Canvas>

эквивалент

```tsx
import styled from 'styled-components';

const Block = styled.div``;
```

#### Компоненты

(Стилизацию можно проверить по наличию селекторов вида `.sc-***`).

<Canvas className='canvas'>
  <Story id='utils-styled-about--component' />
</Canvas>

эквивалент

```tsx
import styled from 'styled-components';

const Block = styled.div``;
const Text: React.FC = props => <span {...props} />;
const StyledBlock = styled(Block)``;
const StyledText = styled(Text)``;
```

#### Глобальные стили

### Аргументы

Аргументами могут быть как результатами выполнения методов (`animation`, `attrs`, `config`, `css`, `system`, `variant`),
так и объектом стилей, а также функцией, возвращающей стили на основе props.

В последних 2 случаях стили обрабатываются по умолчанию методом `css`.

#### Порядок применения

1. `withConfig` (вне зависимости от порядка объявления);
2. `attrs` (вне зависимости от порядка объявления);
3. `system` (вне зависимости от порядка объявления);
4. `animation` (вне зависимости от порядка объявления).
5. `css`, `variant` (в зависимости от порядка объявления).

> Все переданные `animation` объединяются в один вне зависимости от порядка объявления.

```tsx
type ComponentProps = { ... };

const attrs = styled.attrs(...);
const config = styled.withConfig(...);
const styleProps = styled.system(...);
const animationA = styled.animation(...);
const animationB = styled.animation(...);
const cssA = styled.css(...);
const cssB = styled.css(...);
const variantA = styled.variant(...);
const variantB = styled.variant(...);

const Component = styled<ComponentProps>(
  'div',
  config,
  attrs,
  styleProps,
  variantA,
  animationA,
  cssA,
  animationB,
  variantB,
  cssB,
);

const ProtectedComponent = styled.protect(Component);
```