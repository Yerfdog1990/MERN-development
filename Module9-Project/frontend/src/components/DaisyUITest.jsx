export default function DaisyUITest() {
  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">DaisyUI Button Examples</h1>
      
      <div className="grid gap-4">
        {/* Primary Buttons */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Primary Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-primary btn-outline">Primary Outline</button>
            <button className="btn btn-primary btn-disabled">Primary Disabled</button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Secondary Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-secondary btn-outline">Secondary Outline</button>
            <button className="btn btn-secondary btn-sm">Small</button>
            <button className="btn btn-secondary btn-lg">Large</button>
          </div>
        </div>

        {/* Accent Buttons */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Accent Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-accent btn-ghost">Ghost</button>
            <button className="btn btn-accent loading">Loading</button>
          </div>
        </div>

        {/* Success/Warning/Error Buttons */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Colored Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
            <button className="btn btn-info">Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
