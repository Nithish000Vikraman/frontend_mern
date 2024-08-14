import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider'
import './ProductPage.css'
const ProductPage = () => {
    const { prodid } = useParams()
    const [imageset, setimageset] = React.useState(null)
    const [productdata, setproductdata] = React.useState([])
    const [activeimg, setactiveimg] = React.useState({})
    const [count, setcount] = React.useState(1)
    const [showreview, setshowreview] = React.useState(false)

    const getproductdatabyid = async () => {
        let temp = {
            "Code": 200,
            "Message": "Success",
            "Data": [
                {
                    "ProductId": 1,
                    "ProductName": "Whey Protein",
                    "ProductDescription": "Whey protein is a popular dietary supplement made from the liquid part of milk that separates during cheese production. It's rich in essential amino acids and is quickly absorbed by the body, making it a favorite among athletes, bodybuilders, and those looking to increase their protein intake.",
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
                }
            ]
        }

        if (temp.Code == 200) {
            setimageset(temp.Data[0].ProductImage)
            setproductdata(temp.Data[0])
            setactiveimg(temp.Data[0].ProductImage[0])
        }
    }


    useEffect(() => {
        getproductdatabyid()
        window.scroll(0, 0)
    }, [])

    const [rating, setrating] = React.useState(0)


    const products = [
        {
            "ProductId": 1,
            "ProductName": "Whey Protein",
            "ProductDescription": "Whey protein is a popular dietary supplement made from the liquid part of milk that separates during cheese production. It's rich in essential amino acids and is quickly absorbed by the body, making it a favorite among athletes, bodybuilders, and those looking to increase their protein intake.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
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
            "ProductDescription": "Casein protein is another popular protein supplement derived from milk, making up about 80% of the protein found in cow's milk, with the remaining 20% being whey protein. Unlike whey, casein is a slow-digesting protein, making it ideal for different purposes in a fitness or nutrition regimen.",
            "ProductImage": [
                
                {
                    id: 2,
                    image: img1
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
            "ProductDescription": "Pea protein is a plant-based protein powder derived from yellow peas (Pisum sativum). It has become increasingly popular, especially among vegans, vegetarians, and those with allergies or sensitivities to dairy or soy. Pea protein is known for its high digestibility, balanced amino acid profile, and versatility in various diets.",
            "ProductImage": [
                
                {
                    id: 3,
                    image: img3
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
            "ProductDescription": "Brown rice protein is a plant-based protein derived from brown rice. It’s a popular option among those who prefer vegan or vegetarian diets, and it’s known for being hypoallergenic and easily digestible.",
            "ProductImage": [
               
                {
                    id: 4,
                    image: img4
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
            "ProductDescription": "Egg white protein is a high-quality protein derived from the whites of eggs. It’s known for its excellent amino acid profile and digestibility, making it a popular choice among athletes and fitness enthusiasts who prefer animal-based proteins but want to avoid fat and cholesterol.",
            "ProductImage": [
                
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
    const [reloadnavbar, setreloadnavbar] = React.useState(false)
    const addtocart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))

        if (cart) {
            // alert('1 item is already added to cart')
            let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
            if (itemincart) {
                cart = cart.map(item => {
                    if (item.productdata.ProductId === productdata.ProductId) {
                        return {
                            ...item,
                            quantity: item.quantity + count
                        }
                    }
                    else {
                        return item
                    }
                })
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            else {
                cart = [
                    ...cart,
                    {
                        productdata,
                        quantity: count
                    }
                ]
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }
        else {
            cart = [{
                productdata,
                quantity: count
            }]

            // console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        setreloadnavbar(!reloadnavbar)
        // window.location.reload()
        toast.success('Item added to cart')
    }
    return (
        <div className='productpage'>
            {/* <h1>Product id is - {prodid}</h1>
            <p>
                {JSON.stringify(productdata)}
            </p> */}

            <Navbar reloadnavbar={reloadnavbar}/>

            <div className='pc1'>
                <Link to='/'>
                    <button className='goback'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Go Back
                    </button>
                </Link>


                <div className='c11'>
                    <div className='imgset'>
                        {
                            imageset && imageset?.map((item, index) => {
                                return (
                                    <div className='imgsmall'
                                        onClick={() => {
                                            setactiveimg(item)
                                        }}
                                    >
                                        <img src={item.image} alt=""
                                            className={
                                                activeimg.id == item.id ? 'active' : ''
                                            }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='imgbig'>
                        <img src={activeimg.image} alt="" />
                    </div>
                </div>

                <div className='c12'>
                    <h1 className='head1'>{productdata.ProductName}</h1>
                    <div className='c121'>
                        <p className='price'>
                            ${productdata.SalesPrice * count}
                            <span>${productdata.ProductPrice * count}</span>
                        </p>

                        <div className='incrdecr'>
                            <button
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1)
                                    }
                                }}
                            >-</button>
                            <p>{count}</p>
                            <button
                                onClick={() => {
                                    if (count < 10) {
                                        setcount(count + 1)
                                    }
                                }}
                            >+</button>
                        </div>
                    </div>

                    <div className='btncont'>
                        <button
                            onClick={() => {
                                addtocart()
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                alert('Buy Now')
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='pc2'>
                {
                    showreview ?
                        <div className='tabs'>
                            <button
                                className='inactive'

                                onClick={
                                    () => {
                                        setshowreview(false)
                                    }
                                }
                            >Description</button>
                            <button
                                className='active'
                                onClick={
                                    () => {
                                        setshowreview(true)
                                    }
                                }
                            >Reviews</button>
                        </div>
                        :
                        <div className='tabs'>
                            <button
                                className='active'
                                onClick={
                                    () => {
                                        setshowreview(false)
                                    }
                                }
                            >
                                Description
                            </button>

                            <button
                                className='inactive'

                                onClick={
                                    () => {
                                        setshowreview(true)
                                    }
                                }
                            >Reviews</button>
                        </div>
                }
                {
                    showreview ?
                        <div className='reviewcont'>
                            <form>
                                <div className='fromgroup'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" />
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" />
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Review</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Rating</label>
                                    <div className='rating'>
                                        <div className='star'
                                            onClick={() => {
                                                setrating(1)
                                            }}
                                        >
                                            {
                                                rating >= 1 ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>

                                            }
                                        </div>

                                        <div className='star' onClick={() => {
                                            setrating(2)
                                        }}>
                                            {
                                                rating >= 2 ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>

                                            }
                                        </div>
                                        <div className='star' onClick={() => {
                                            setrating(3)
                                        }}>
                                            {
                                                rating >= 3 ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>

                                            }
                                        </div>
                                        <div className='star' onClick={() => {
                                            setrating(4)
                                        }}>
                                            {
                                                rating >= 4 ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>

                                            }
                                        </div>
                                        <div className='star' onClick={() => {
                                            setrating(5)
                                        }}>
                                            {
                                                rating >= 5 ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>

                                            }
                                        </div>
                                    </div>
                                </div>

                                <button>Submit</button>
                            </form>


                            <div className='allreview'>
                                <h1 className='head1'>Product Reviews</h1>
                                {productdata.ProductReviews &&
                                    productdata.ProductReviews.map((item, index) => {
                                        return (
                                            <div className='review'>
                                                <div className='reviewhead'>
                                                    <p className='name'>{item.Name}</p>
                                                    <div className='rating1'>
                                                        <div className='star'

                                                        >
                                                            {
                                                                item.Rating >= 1 ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>

                                                            }
                                                        </div>
                                                        <div className='star'

                                                        >
                                                            {
                                                                item.Rating >= 2 ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>

                                                            }
                                                        </div>
                                                        <div className='star'

                                                        >
                                                            {
                                                                item.Rating >= 3 ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>

                                                            }
                                                        </div>
                                                        <div className='star'

                                                        >
                                                            {
                                                                item.Rating >= 4 ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>

                                                            }
                                                        </div>


                                                        <div className='star'

                                                        >
                                                            {
                                                                item.Rating >= 5 ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                    </svg>

                                                            }
                                                        </div>
                                                    </div>
                                                    <span className='date'>{item.Date}</span>
                                                </div>

                                                <div className='reviewbody'>
                                                    {item.Review}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <p className='desc'>
                            {productdata.ProductDescription}
                        </p>
                }
            </div>

            <div className='slidercont'>
                <ProductsSlider products={products} categoryname='Related Products' />
            </div>
            <div className='slidercont'>
                <ProductsSlider products={products} categoryname='Explore More' />
            </div>
            <Footer1 />
            <Footer2 />
        </div>
    )
}

export default ProductPage