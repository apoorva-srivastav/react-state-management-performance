import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

interface RenderTreeProps {
  appFilePath: string;
}

const RenderTree: React.FC<RenderTreeProps> = ({ appFilePath }) => {
  const [renderTree, setRenderTree] = useState<string | null>(null);

  useEffect(() => {
    import(appFilePath)
      .then((module) => {
        const App = module.default;
        const renderedTree = ReactDOMServer.renderToString(<App />);
        setRenderTree(renderedTree);
      })
      .catch((error) => {
        console.error('Error loading app file:', error);
      });
  }, [appFilePath]);

  const highlightComponent = (element: JSX.Element | string, index: number): JSX.Element => {
    // Check if the element is a string (text node)
    if (typeof element === 'string') {
      return <span key={index}>{element}</span>;
    }

    // Check if the element has children
    if (React.Children.count(element.props.children) > 0) {
      return React.cloneElement(element, {
        children: React.Children.map(element.props.children, highlightComponent),
      });
    }

    // Highlight the component that updates
    const highlightedStyle = {
      backgroundColor: 'yellow',
    };
    const componentName = element.type && element.type.name;
    return (
      <div key={index} style={highlightedStyle}>
        <span>{componentName}</span>
        {React.cloneElement(element, { style: highlightedStyle })}
      </div>
    );
  };

  if (typeof window === 'undefined') {
    // Server-side rendering
    return <div>Loading...</div>;
  }

  if (renderTree) {
    const parsedTree = React.createElement('div', {
      dangerouslySetInnerHTML: { __html: renderTree },
    });

    const highlightedTree = React.Children.map(parsedTree.props.children, highlightComponent);

    return (
      <div>
        <h2>React Render Tree:</h2>
        <div>{highlightedTree}</div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

const ShowReactTree = () => {
  const appFilePath = '../../App.tsx';

  return (
    <div>
      <RenderTree appFilePath={appFilePath} />
    </div>
  );
};

export default ShowReactTree;
