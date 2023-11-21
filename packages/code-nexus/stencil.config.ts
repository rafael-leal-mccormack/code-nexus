import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'CodeNexus',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'code-nexus',
      proxiesFile: '../code-nexus-react/lib/components/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
