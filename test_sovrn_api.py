"""
Sovrn Commerce Price Comparison API Test Script

Tests the Sovrn API to find products at multiple retailers.
API Docs: https://developer.sovrn.com/reference/product-affiliate-api
"""

import requests
import json

# API Configuration - Sovrn requires TWO keys:
# 1. Site API Key - identifies your site (found in Settings page)
# 2. Secret Key - authenticates API requests (found in Settings page)

# Sovrn API Keys
SITE_API_KEY = "8385bed416f9d04124c9e2a38846b0fb"  # Site API Key
SECRET_KEY = "3a3bc9edc2eee08309f17142ac07369c359eb51b"  # Secret Key (just generated)

# For tvschool.academy (not yet approved):
# SITE_API_KEY = "6f09cc1141928994a408b2ad2bb49c19"

# Test products from your data.js
TEST_PRODUCTS = [
    {
        "name": "LG 55\" B4 OLED",
        "bestbuy_url": "https://www.bestbuy.com/site/lg-55-class-b4-series-oled-4k-uhd-smart-webos-tv/6578057.p?skuId=6578057",
        "sku": "6578057"
    },
    {
        "name": "Samsung 65\" S90D QD-OLED",
        "bestbuy_url": "https://www.bestbuy.com/site/samsung-65-class-s90d-series-oled-4k-uhd-smart-tizen-tv-2024/6576038.p?skuId=6576038",
        "sku": "6576038"
    },
]


def test_affiliated_api_v35(site_api_key, secret_key, url, product_name):
    """
    Test the Price Comparison Affiliated API v3.5
    Uses GET request with query parameters
    """
    print(f"\n{'='*60}")
    print(f"TEST: Affiliated API v3.5 for {product_name}")
    print(f"Site Key: {site_api_key[:8]}...")
    print(f"Secret Key: {secret_key[:8]}...")
    print('='*60)

    # Endpoint: /api/affiliate/v3.5/sites/{site-api-key}/compare/prices/{market}/by/accuracy
    endpoint = f"https://comparisons.sovrn.com/api/affiliate/v3.5/sites/{site_api_key}/compare/prices/usd_en/by/accuracy"

    headers = {
        "Authorization": f"secret {secret_key}"
    }

    params = {
        "plainlink": url,
        "limit": 10
    }

    try:
        response = requests.get(endpoint, headers=headers, params=params)
        print(f"Status Code: {response.status_code}")
        print(f"URL: {response.url[:80]}...")

        if response.status_code == 200:
            try:
                data = response.json()
                print(f"\n[SUCCESS] Found {len(data) if isinstance(data, list) else 'unknown'} results")

                # Parse and display results
                if isinstance(data, list):
                    print(f"\n--- Offers from {len(data)} merchants ---")
                    for i, offer in enumerate(data[:10], 1):
                        merchant = offer.get('merchant', {})
                        merchant_name = merchant.get('name', 'Unknown') if isinstance(merchant, dict) else str(merchant)
                        price = offer.get('salePrice', offer.get('retailPrice', 'N/A'))
                        retail_price = offer.get('retailPrice', 'N/A')
                        deeplink = offer.get('deeplink', '')

                        print(f"\n{i}. {merchant_name}")
                        print(f"   Sale Price: ${price}")
                        if retail_price != price:
                            print(f"   Retail Price: ${retail_price}")
                        print(f"   Affiliatable: {offer.get('affiliatable', 'N/A')}")
                        print(f"   EPC: ${offer.get('epc', 'N/A')}")
                        if deeplink:
                            print(f"   Deeplink: {deeplink[:70]}...")
                elif isinstance(data, dict) and "offers" in data:
                    print(f"\n--- Found {len(data['offers'])} offers ---")
                    for i, offer in enumerate(data['offers'][:10], 1):
                        print(f"\n{i}. {offer.get('merchantName', 'N/A')}")
                        print(f"   Price: ${offer.get('price', 'N/A')}")
                return True
            except json.JSONDecodeError:
                print(f"Response (raw): {response.text[:500]}")
        else:
            print(f"Error Response: {response.text[:300]}")
        return False

    except Exception as e:
        print(f"Error: {e}")
        return False


def test_keyword_search(site_api_key, secret_key, keywords):
    """
    Test keyword-based search
    """
    print(f"\n{'='*60}")
    print(f"TEST: Keyword Search for '{keywords}'")
    print('='*60)

    endpoint = f"https://comparisons.sovrn.com/api/affiliate/v3.5/sites/{site_api_key}/compare/prices/usd_en/by/accuracy"

    headers = {
        "Authorization": f"secret {secret_key}"
    }

    params = {
        "search-keywords": keywords,
        "limit": 5
    }

    try:
        response = requests.get(endpoint, headers=headers, params=params)
        print(f"Status Code: {response.status_code}")

        if response.status_code == 200:
            try:
                data = response.json()
                print(f"\n[SUCCESS] Found {len(data) if isinstance(data, list) else 'unknown'} results")
                if isinstance(data, list):
                    for i, offer in enumerate(data[:5], 1):
                        merchant = offer.get('merchant', {})
                        merchant_name = merchant.get('name', 'Unknown') if isinstance(merchant, dict) else str(merchant)
                        price = offer.get('salePrice', offer.get('retailPrice', 'N/A'))

                        print(f"\n{i}. {merchant_name}")
                        print(f"   Price: ${price}")
                        print(f"   EPC: ${offer.get('epc', 'N/A')}")
                        if offer.get('image'):
                            print(f"   Image: {offer.get('image', '')[:60]}...")
                return True
            except:
                print(f"Response (raw): {response.text[:500]}")
        else:
            print(f"Error: {response.text[:300]}")
        return False

    except Exception as e:
        print(f"Error: {e}")
        return False


def test_detailed_search(keywords):
    """
    Do a detailed search and print the full response structure
    """
    print(f"\n{'='*60}")
    print(f"DETAILED SEARCH: '{keywords}'")
    print('='*60)

    endpoint = f"https://comparisons.sovrn.com/api/affiliate/v3.5/sites/{SITE_API_KEY}/compare/prices/usd_en/by/accuracy"

    headers = {
        "Authorization": f"secret {SECRET_KEY}"
    }

    params = {
        "search-keywords": keywords,
        "limit": 10
    }

    try:
        response = requests.get(endpoint, headers=headers, params=params)

        if response.status_code == 200:
            data = response.json()
            print(f"\nFull response for first result:")
            if data and len(data) > 0:
                print(json.dumps(data[0], indent=2))

            print(f"\n--- All {len(data)} results summary ---")
            for i, offer in enumerate(data, 1):
                merchant = offer.get('merchant', {})
                merchant_name = merchant.get('name', 'Unknown') if isinstance(merchant, dict) else str(merchant)
                sale_price = offer.get('salePrice', 'N/A')
                retail_price = offer.get('retailPrice', 'N/A')
                deeplink = offer.get('deeplink', '')
                affiliatable = offer.get('affiliatable', False)

                print(f"\n{i}. {merchant_name}")
                print(f"   Sale: ${sale_price} | Retail: ${retail_price}")
                print(f"   Affiliatable: {affiliatable}")
                print(f"   EPC: ${offer.get('epc', 0):.4f}")
                if deeplink:
                    print(f"   Link: {deeplink[:80]}...")
        else:
            print(f"Error: {response.text[:300]}")

    except Exception as e:
        print(f"Error: {e}")


def main():
    print("="*60)
    print("SOVRN COMMERCE PRICE COMPARISON API TEST")
    print("="*60)
    print(f"\nSite API Key: {SITE_API_KEY[:8]}...{SITE_API_KEY[-4:]}")
    print(f"Secret Key: {SECRET_KEY[:8]}...{SECRET_KEY[-4:]}")

    # Test keyword searches with specific TV models
    print("\n" + "="*60)
    print("TESTING KEYWORD SEARCHES FOR SPECIFIC TV MODELS")
    print("="*60)

    # Search for specific TV models from your inventory
    searches = [
        "LG B4 OLED 55 inch TV",
        "Samsung S90D 65 inch OLED",
        "Sony Bravia 8 65 OLED",
        "TCL QM8 65 Mini LED",
        "Hisense U8N 65 TV"
    ]

    for search in searches:
        test_keyword_search(SITE_API_KEY, SECRET_KEY, search)

    # Show detailed response for one search
    print("\n" + "="*60)
    print("DETAILED RESPONSE STRUCTURE")
    print("="*60)

    test_detailed_search("Samsung S90D 65 OLED TV")

    print("\n" + "="*60)
    print("TEST COMPLETE")
    print("="*60)
    print("\nKey findings:")
    print("- Keyword search works best for finding products across retailers")
    print("- Each result includes: merchant, price, deeplink (affiliate URL), EPC")
    print("- The 'affiliatable' field indicates if Sovrn can monetize the link")


if __name__ == "__main__":
    main()
