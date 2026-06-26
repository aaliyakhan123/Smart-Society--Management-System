function StatCard({ title, value }) {
  return (
    <div className="card shadow-sm p-3">
      <h6>{title}</h6>
      <h3>{value}</h3>
    </div>
  );
}

export default StatCard;