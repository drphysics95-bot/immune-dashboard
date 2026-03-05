export default function SystemStatus() {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold">System Status</h2>

      <p className="mt-2 text-sm">
        Computational resources are optimized.
      </p>

      <div className="mt-4">
        <p className="text-2xl font-bold">98.2%</p>
        <p className="text-sm">Node Efficiency</p>
      </div>

      <div className="mt-2">
        <p className="text-xl font-bold">1.2s</p>
        <p className="text-sm">Avg Latency</p>
      </div>

    </div>
  )
}