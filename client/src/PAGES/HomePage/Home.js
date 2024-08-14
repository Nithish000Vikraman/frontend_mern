import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider'


const Home = () => {

  const products = [
    {
        "ProductId": 1,
        "ProductName": "Whey Protein",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img1
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Seedu Muthu",
                            "Email": "muthu@gmail.com",
                            "Rating": 5,
                            "Date": "01-07-2024",
                             "Review": "Excellent Protein...",
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Vikrama",
                            "Email": "vikrama@gmail.com",
                            "Rating": 3,
                            "Date": "05-06-2024",
                            "Review": "Good Protein but we need the protein to reduce the carbohydrate and its fats content",
                        },
                        {
                            "ReviewId": 3,
                            "Name": "M S Dhoni",
                            "Email": "dhoni@gmail.com",
                            "Rating": 5,
                            "Date": "22-07-2024",
                            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was lasted forever",
                        }
                    ]
    },
    {
        "ProductId": 2,
        "ProductName": "Casein Protein",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img2
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Seedu Muthu",
                            "Email": "muthu@gmail.com",
                            "Rating": 5,
                            "Date": "01-07-2024",
                             "Review": "Excellent Protein...",
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Vikrama",
                            "Email": "vikrama@gmail.com",
                            "Rating": 3,
                            "Date": "05-06-2024",
                            "Review": "Good Protein but we need the protein to reduce the carbohydrate and its fats content",
                        },
                        {
                            "ReviewId": 3,
                            "Name": "M S Dhoni",
                            "Email": "dhoni@gmail.com",
                            "Rating": 5,
                            "Date": "22-07-2024",
                            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was lasted forever",
                        }
                    ]
    },
    {
        "ProductId": 3,
        "ProductName": "Pea Protein",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img3
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Seedu Muthu",
                            "Email": "muthu@gmail.com",
                            "Rating": 5,
                            "Date": "01-07-2024",
                             "Review": "Excellent Protein...",
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Vikrama",
                            "Email": "vikrama@gmail.com",
                            "Rating": 3,
                            "Date": "05-06-2024",
                            "Review": "Good Protein but we need the protein to reduce the carbohydrate and its fats content",
                        },
                        {
                            "ReviewId": 3,
                            "Name": "M S Dhoni",
                            "Email": "dhoni@gmail.com",
                            "Rating": 5,
                            "Date": "22-07-2024",
                            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was lasted forever",
                        }
                    ]
    },
    {
        "ProductId": 4,
        "ProductName": "Brown Rice Protein",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img4
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Seedu Muthu",
                            "Email": "muthu@gmail.com",
                            "Rating": 5,
                            "Date": "01-07-2024",
                             "Review": "Excellent Protein...",
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Vikrama",
                            "Email": "vikrama@gmail.com",
                            "Rating": 3,
                            "Date": "05-06-2024",
                            "Review": "Good Protein but we need the protein to reduce the carbohydrate and its fats content",
                        },
                        {
                            "ReviewId": 3,
                            "Name": "M S Dhoni",
                            "Email": "dhoni@gmail.com",
                            "Rating": 5,
                            "Date": "22-07-2024",
                            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was lasted forever",
                        }
                    ]
    },
    {
        "ProductId": 5,
        "ProductName": "Egg White Protein",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img5
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Seedu Muthu",
                            "Email": "muthu@gmail.com",
                            "Rating": 5,
                            "Date": "01-07-2024",
                             "Review": "Excellent Protein...",
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Vikrama",
                            "Email": "vikrama@gmail.com",
                            "Rating": 3,
                            "Date": "05-06-2024",
                            "Review": "Good Protein but we need the protein to reduce the carbohydrate and its fats content",
                        },
                        {
                            "ReviewId": 3,
                            "Name": "M S Dhoni",
                            "Email": "dhoni@gmail.com",
                            "Rating": 5,
                            "Date": "22-07-2024",
                            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was lasted forever",
                        }
                    ]
    }
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />

      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Related Products' />
      </div>
      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Explore More' />
      </div>
      <Footer2 />
    </div>
  )
}

export default Home