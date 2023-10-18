

type DataType = {
  id: number,
  name?: string,
  description?: string,
  imageSrc?: string,
  imageAlt?: string
}

export default function ItemList({ data }: { data: DataType[] }) {

  return <>
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {data.map((item) => (
        <div key={item.name} className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={`item/${item.id}`}>
              <span className="absolute inset-0" />
              {item.name}
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">{item.description}</p>
        </div>
      ))}
    </div>

  </>
}