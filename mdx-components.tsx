import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return  {
    h1: (props) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
    ),
    p: (props) => (
      <p className="leading-7 mb-4 text-gray-700" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 mb-4" {...props} />
    ),
    code: (props) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded" {...props} />
    ),
    ...components,
  };
}