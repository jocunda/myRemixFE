
const recipes = [
  {
    title: "1. Mixing",
    time: "13 January 2022",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    image: true
  },
  {
    title: "2. Moulding",
    time: "13 January 2022",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    title: "3. Fabrication",
    time: "13 January 2022",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    title: "4. Shipping",
    time: "13 January 2022",
    description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
]

const images = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    qty: 48,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    qty: 25,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    qty: 89,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    qty: 35,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    qty: 35,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '#',
    qty: 35,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export default function ItemRecipe() {
  return <>
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {recipes.map((recipe) => (
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{recipe.title}</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{recipe.time}</time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{recipe.description}</p>
          {recipe.image ?
            <div className="flex flex-wrap py-6">
              {images.map((image) => (
                <div key={image.name} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 p-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="text-base font-medium text-gray-900">
                      <h3>
                        <a href="/">{image.name}</a>
                      </h3>
                    </div>
                    <p className="mt-1 font-medium text-gray-500">{image.qty}</p>
                  </div>
                </div>
              ))}
            </div>
            : ""}
        </li>
      ))}
    </ol>
  </>
}