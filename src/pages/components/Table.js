import { Link } from "react-router-dom";
import StandartContainer from "./StandartContainer";

export default function Table({ tableColumns, contents }) {
  return (
    <div className="container mx-auto mt-12 bg-slate-300">
      <table className="w-full text-center">
        <thead>
          <tr>
            {tableColumns.map((item, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 text-xl">
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {contents.map((item, index) => {
            return (
              <tr key={index}>
                {tableColumns.map((content) => {
                  return (
                    <td key={content.key} className="px-3 py-3">
                      {content.link ? (
                        <Link to={content.href + "/" + item.id}>
                          {item[content.key]}
                        </Link>
                      ) : (
                        item[content.key]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
