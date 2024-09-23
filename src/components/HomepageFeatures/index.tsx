import clsx from 'clsx'; 
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';  // Importa el componente Link para los enlaces internos
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;  // Agrega una propiedad para la ruta del enlace
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Xceed Toolkit Plus for WPF',
    Svg: require('@site/static/img/wpf-toolkit.svg').default,
    description: (
      <>
       The number one WPF control toolkit for creating next-generation Windows applications is updated often, widely used, and backed by a responsive support and development team whose sole ambition is your complete satisfaction. It provides 103 UI controls, panels, and themes missing from WPF. With over 1 million downloads, the toolkit supports .NET 4.5, 5, 6, and 7+.
      </>      
    ),
    link: '/docs/welcome',  // Ruta hacia la documentación
  },
  {
    title: 'Xceed DataGrid for WPF',
    Svg: require('@site/static/img/datagrid-for-wpf.svg').default,
    description: (
      <>
       Fast, powerful, and mature, with a 13-year track record, this is the only WPF datagrid that provides a rich, fluid, and high-performance user experience. It is frequently updated and backed by a responsive support and development team whose sole ambition is your complete satisfaction. Used and trusted by Microsoft in Visual Studio, it boasts the richest feature set with over 185 capabilities.
      </>
    ),
    link: '/datagrid/welcome',  // Ruta hacia la documentación
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Link to={link}> {/* Sólo la imagen será enlace */}
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}> {/* Sólo el título será enlace */}
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p> {/* La descripción no es enlace */}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
