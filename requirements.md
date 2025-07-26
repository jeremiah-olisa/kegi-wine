# KeGi Wines and Lounge - Product Requirements Document

This document outlines the requirements for the **KeGi Wines and Lounge** food menu application, providing a guide for its development using React with TypeScript.

## 1. Introduction

KeGi Wines and Lounge is a digital food menu application designed to enhance the customer ordering experience. It will allow customers to browse various food and drink categories, view item details, and place orders which can then be easily retrieved by staff via a QR code system.

## 2. Goals

- Provide an intuitive and user-friendly digital menu interface.
- Streamline the ordering process for customers.
- Enable efficient order retrieval for staff using QR codes.
- Improve overall customer satisfaction and operational efficiency for KeGi Wines and Lounge.

## 3. Core Features

### 3.1 Menu Display

- **Categorized Menus:** The application will display food and drink items organized into distinct categories (e.g., Wines, Cocktails, Non-Alcoholic Drinks, Appetizers, Main Courses, Desserts, Snacks).
- **Item Details:** Each menu item will include:
  - Name
  - Description
  - Price
  - *Optional:* Image
  - *Optional:* Dietary information (e.g., vegetarian, gluten-free)
- **Search/Filter (Future Consideration):** Ability to search for specific items or filter by dietary preferences.

### 3.2 Order Management

- **Add to Cart:** Customers can select items and add them to a virtual shopping cart.
- **Cart Review:** Customers can review their selected items, adjust quantities, and remove items before placing an order.
- **Order Placement:** Upon confirming the order, the application will generate a unique order ID.
- **QR Code Generation:** A QR code will be displayed on the customer's device, encoding the unique order ID. This QR code will serve as the primary method for waiters to retrieve the order details from a backend system (to be developed separately).

## 4. Technology Stack

- **Frontend:** React with TypeScript
- **Styling:** Tailwind CSS (recommended for rapid development and responsiveness)
- **Backend (Placeholder):** For the initial phase, the QR code will represent a unique order ID that a waiter can manually input or scan into an external system. A full backend system for order processing and management is a future consideration.

## 5. User Journey Map

This map illustrates a typical customer's interaction with the KeGi Wines and Lounge application.

**Persona:** A customer at KeGi Wines and Lounge who wants to browse the menu and place an order.

| Step | Action (User) | System Response / Screen | Notes |
|------|--------------|-------------------------|-------|
| 1 | Arrives at Lounge / Scans Table QR | (Not part of this app's scope directly, but triggers app access) | Assumes a QR code on the table or a direct URL leads to the app. |
| 2 | Launches KeGi Wines and Lounge App | Home/Category Selection Screen | Displays main categories (Wines, Snacks, etc.). |
| 3 | Selects a Category (e.g., "Wines") | Menu List Screen (Wines) | Shows all items within the "Wines" category. |
| 4 | Browses Items / Scrolls Down | Updates menu list as user scrolls. | User can see item names, prices, and brief descriptions. |
| 5 | Taps on an Item (e.g., "Merlot") | Item Detail Screen | Displays full description, price, image, and "Add to Cart" button. |
| 6 | Taps "Add to Cart" | Updates cart icon/count; brief confirmation (e.g., toast message). | Item is added to the virtual shopping cart. |
| 7 | Continues Browsing / Adds More Items | Repeats steps 3-6 for other categories/items. | User can navigate back to categories or other item lists. |
| 8 | Taps "View Cart" / Cart Icon | Cart Summary Screen | Shows all selected items, quantities, subtotal, and total. |
| 9 | Reviews Order / Adjusts Quantities | Updates total in real-time. | User can increase/decrease quantities or remove items. |
| 10 | Taps "Place Order" | Order Confirmation / QR Code Screen | Displays a unique order ID and a generated QR code. |
| 11 | Shows QR Code to Waiter | (Waiter scans QR code using their device/system) | The waiter uses the QR code to retrieve order details. |
| 12 | Order is Processed | (Backend system handles order; app remains on QR screen or confirms order sent) | User waits for their order to be served. |

## 6. Screens Needed

Based on the user journey, the following screens will be required:

### Home/Category Selection Screen
- App logo/name: "KeGi Wines and Lounge"
- List of main menu categories (e.g., Wines, Cocktails, Snacks, Main Courses).
- Visually appealing layout with clear category names and possibly icons/images.
- A "Cart" icon, possibly with a count of items in the cart.

### Menu List Screen
- Header indicating the current category (e.g., "Wines").
- Back button to return to the Home/Category Selection screen.
- Scrollable list of menu items within the selected category.
- Each item card should display: Name, Price, and a brief description.
- An "Add to Cart" button or icon directly on the item card (optional, or user taps for details first).
- A "Cart" icon, possibly with a count of items in the cart.

### Item Detail Screen
- Header with the item name.
- Back button to return to the Menu List screen.
- Large image of the item (if available).
- Detailed description of the item.
- Price.
- Quantity selector (e.g., + / - buttons).
- "Add to Cart" button.
- A "Cart" icon, possibly with a count of items in the cart.

### Cart Summary Screen
- Header: "Your Order" or "Cart".
- List of all items added to the cart, showing:
  - Item Name
  - Quantity (with editable +/- controls)
  - Individual Item Price
  - Subtotal for each item (Quantity x Price)
  - Total price of the order.
- "Place Order" button.
- "Continue Shopping" or "Back to Menu" button.

### Order Confirmation / QR Code Screen
- Header: "Order Placed!" or "Your Order is Ready".
- Confirmation message (e.g., "Please show this QR code to your waiter.").
- Unique Order ID displayed prominently.
- Large, scannable QR code.
- *Optional:* Estimated waiting time (future consideration).
- *Optional:* "New Order" or "Back to Home" button.

## 7. Future Considerations

- **Backend Integration:** Full integration with a backend system for order processing, kitchen display systems, and payment.
- **User Accounts:** Ability for customers to create accounts, save preferences, and view order history.
- **Customization Options:** Allow customers to add notes or special requests for items (e.g., "no onions").
- **Waiter Interface:** A separate application or module for waiters to manage orders.
- **Promotions/Specials:** Display daily specials or promotions.
- **Multilingual Support:** Support for multiple languages.
- **Feedback/Rating System:** Allow customers to provide feedback on items or service.

## 8. Deployment and Accessibility

- **Progressive Web App (PWA):** The application will be developed as a PWA, enabling it to be installed on users' devices for an app-like experience.
- **Installation Prompt:** Upon the first visit, the application will prompt the user to install the PWA to their home screen.

## 9. Component Breakdown per Screen

This section details the primary React components that will likely be needed for each screen.

### 9.1. Home/Category Selection Screen

- **HomeScreen (Page Component):** The main container for this view.
- **AppHeader:** Displays "KeGi Wines and Lounge" logo/name and potentially a global cart icon.
  - Logo (or AppName)
  - CartIcon (with itemCount prop)
- **CategoryList:** Renders a list of CategoryCard components.
  - CategoryCard (for each category): Displays category name, image/icon. Handles navigation to MenuListScreen.

### 9.2. Menu List Screen

- **MenuListScreen (Page Component):** The main container for displaying items within a category.
- **ScreenHeader:** Displays the category name, a back button, and a global cart icon.
  - BackButton
  - PageTitle (e.g., "Wines")
  - CartIcon (with itemCount prop)
- **MenuItemList:** Renders a scrollable list of MenuItemCard components.
  - MenuItemCard (for each menu item): Displays item name, description, price. Handles navigation to ItemDetailScreen or directly adds to cart.
    - ItemImage (optional)
    - ItemName
    - ItemDescription
    - ItemPrice
    - AddToCartButton (or icon)

### 9.3. Item Detail Screen

- **ItemDetailScreen (Page Component):** The main container for displaying detailed item information.
- **ScreenHeader:** Displays the item name, a back button, and a global cart icon.
  - BackButton
  - PageTitle (e.g., "Merlot")
  - CartIcon (with itemCount prop)
- **ItemDetail:** Displays all details of a single item.
  - ItemImage (larger version)
  - ItemName
  - ItemDescription (full text)
  - ItemPrice
  - QuantitySelector (with currentQuantity, onIncrease, onDecrease props)
  - AddToCartButton (confirms adding the selected quantity to cart)

### 9.4. Cart Summary Screen

- **CartSummaryScreen (Page Component):** The main container for reviewing the order.
- **ScreenHeader:** Displays "Your Order" title and potentially a back button (though "Continue Shopping" might be preferred).
  - PageTitle (e.g., "Your Order")
- **CartItemList:** Renders a list of CartItem components.
  - CartItem (for each item in the cart): Displays item name, current quantity, individual price, and subtotal.
    - ItemName
    - QuantitySelector (with currentQuantity, onIncrease, onDecrease props)
    - ItemPrice
    - ItemSubtotal
    - RemoveItemButton
- **CartSummary:** Displays the total price of the order.
  - OrderTotal
- **CartActionButtons:** Contains buttons to proceed or continue shopping.
  - PlaceOrderButton
  - ContinueShoppingButton

### 9.5. Order Confirmation / QR Code Screen

- **OrderConfirmationScreen (Page Component):** The main container for displaying order confirmation and QR code.
- **ScreenHeader:** Displays "Order Placed!" title.
  - PageTitle (e.g., "Order Placed!")
- **OrderConfirmationDetails:** Displays the confirmation message and order ID.
  - ConfirmationMessage
  - OrderIdDisplay
- **QRCodeDisplay:** Generates and displays the QR code based on the order ID.
  - QRCodeImage (generated dynamically)
- **OrderActionButtons:** Contains buttons for next steps.
  - NewOrderButton (or "Back to Home")

### Common/Global Components

- **AppLayout:** A higher-order component that provides consistent layout (e.g., padding, background) across all pages.
- **LoadingSpinner:** For displaying during data fetching or order processing.
- **ToastMessage:** For brief, non-intrusive notifications (e.g., "Item added to cart!").
- **Modal:** For confirmation dialogs or more complex interactions (e.g., "Are you sure you want to remove this item?").
- **PWAInstallPrompt:** A component that handles the PWA installation prompt logic.