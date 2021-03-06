const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            dish: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Dish'
            }
        }
    ],
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Restaurant'
    },
    deliveryAddress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    paymentMethod: {
        type: String,
    },
    itemPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    gst: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    packagingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    status: {
        type: String,
        default: ''
    },
    deliveredAt: {
        type: Date
    },
    paymentID: {
        type: String
    }
}, {
    timestamps: true
}) 

const Order = mongoose.model('Order', orderSchema)
module.exports = Order