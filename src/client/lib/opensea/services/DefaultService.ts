/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Retrieve an asset
     * @param assetContractAddress Address of the contract for this NFT
     * @param tokenId Token ID for this item
     * @param xApiKey Your API Key (contact us to request one!)
     * @param accountAddress Address of an owner of the token.  If you include this, the response will include an `ownership` object that includes the number of tokens owned by the address provided instead of the `top_ownerships` object included in the standard response, which provides the number of tokens owned by each of the 10 addresses with the greatest supply of the token..
     * @param includeOrders A flag determining if order information should be included in the response.  The default value of this flag is false.
     * @throws ApiError
     */
    public static retrievingASingleAsset(
        assetContractAddress: string = '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
        tokenId: string = '1',
        xApiKey?: string,
        accountAddress?: string,
        includeOrders: string = 'false',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/asset/{asset_contract_address}/{token_id}/',
            path: {
                'asset_contract_address': assetContractAddress,
                'token_id': tokenId,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'account_address': accountAddress,
                'include_orders': includeOrders,
            },
        });
    }

    /**
     * Retrieve assets
     * @param owner The address of the owner of the assets
     * @param tokenIds An array of token IDs to search for (e.g. `?token_ids=1&token_ids=209`). Will return a list of assets with token_id matching any of the IDs in this array.
     * @param collection Limit responses to members of a collection.  Case sensitive and must match the collection slug exactly. Will return all assets from all contracts in a collection.  For more information on collections, see our [collections documentation](/reference#retrieving-collections).
     * @param collectionSlug Limit responses to members of a collection.  Case sensitive and must match the collection slug exactly. Will return all assets from all contracts in a collection.  For more information on collections, see our [collections documentation](/reference#retrieving-collections).
     * @param collectionEditor 
     * @param orderDirection Can be `asc` for ascending or `desc` for descending
     * @param assetContractAddress The NFT contract address for the assets
     * @param assetContractAddresses An array of contract addresses to search for (e.g. `?asset_contract_addresses=0x1...&asset_contract_addresses=0x2...`). Will return a list of assets with contracts matching any of the addresses in this array. If "token_ids" is also specified, then it will only return assets that match each `(address, token_id)` pairing, respecting order. Also, `"sell_orders": null` prefetches sell orders when returning assets in a list view and `"auctions": [` shows a list of 3rd party auctions that are on-chain.
     * @param limit Limit. Defaults to 20, capped at 50.
     * @param cursor A cursor pointing to the page to retrieve
     * @param xApiKey 
     * @param includeOrders A flag determining if order information should be included in the response.
     * @returns any 200
     * @throws ApiError
     */
    public static gettingAssets(
        owner?: string,
        tokenIds?: string,
        collection?: string,
        collectionSlug?: string,
        collectionEditor?: string,
        orderDirection: string = 'desc',
        assetContractAddress?: string,
        assetContractAddresses?: string,
        limit: string = '20',
        cursor?: string,
        xApiKey?: string,
        includeOrders: string = 'false',
    ): CancelablePromise<{
        next?: string;
        previous?: any;
        assets?: Array<{
            id?: number;
            num_sales?: number;
            background_color?: any;
            image_url?: string;
            image_preview_url?: string;
            image_thumbnail_url?: string;
            image_original_url?: any;
            animation_url?: any;
            animation_original_url?: any;
            name?: string;
            description?: any;
            external_link?: any;
            asset_contract?: {
                address?: string;
                asset_contract_type?: string;
                created_date?: string;
                name?: string;
                nft_version?: any;
                opensea_version?: string;
                owner?: number;
                schema_name?: string;
                symbol?: string;
                total_supply?: any;
                description?: string;
                external_link?: any;
                image_url?: any;
                default_to_fiat?: boolean;
                dev_buyer_fee_basis_points?: number;
                dev_seller_fee_basis_points?: number;
                only_proxied_transfers?: boolean;
                opensea_buyer_fee_basis_points?: number;
                opensea_seller_fee_basis_points?: number;
                buyer_fee_basis_points?: number;
                seller_fee_basis_points?: number;
                payout_address?: any;
            };
            permalink?: string;
            collection?: {
                banner_image_url?: any;
                chat_url?: any;
                created_date?: string;
                default_to_fiat?: boolean;
                description?: string;
                dev_buyer_fee_basis_points?: string;
                dev_seller_fee_basis_points?: string;
                discord_url?: any;
                display_data?: {
                    card_display_style?: string;
                };
                external_url?: any;
                featured?: boolean;
                featured_image_url?: any;
                hidden?: boolean;
                safelist_request_status?: string;
                image_url?: string;
                is_subject_to_whitelist?: boolean;
                large_image_url?: any;
                medium_username?: any;
                name?: string;
                only_proxied_transfers?: boolean;
                opensea_buyer_fee_basis_points?: string;
                opensea_seller_fee_basis_points?: string;
                payout_address?: string;
                require_email?: boolean;
                short_description?: any;
                slug?: string;
                telegram_url?: any;
                twitter_username?: any;
                instagram_username?: any;
                wiki_url?: any;
            };
            decimals?: any;
            token_metadata?: any;
            owner?: {
                user?: {
                    username?: string;
                };
                profile_img_url?: string;
                address?: string;
                config?: string;
            };
            sell_orders?: any;
            creator?: {
                user?: {
                    username?: string;
                };
                profile_img_url?: string;
                address?: string;
                config?: string;
            };
            traits?: any[];
            last_sale?: any;
            top_bid?: any;
            listing_date?: any;
            is_presale?: boolean;
            transfer_fee_payment_token?: any;
            transfer_fee?: any;
            token_id?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'owner': owner,
                'token_ids': tokenIds,
                'collection': collection,
                'collection_slug': collectionSlug,
                'collection_editor': collectionEditor,
                'order_direction': orderDirection,
                'asset_contract_address': assetContractAddress,
                'asset_contract_addresses': assetContractAddresses,
                'limit': limit,
                'cursor': cursor,
                'include_orders': includeOrders,
            },
        });
    }

    /**
     * Retrieve events
     * @param onlyOpensea Restrict to events on OpenSea auctions. Can be `true` or `false`
     * @param tokenId The token's id to optionally filter by
     * @param assetContractAddress The NFT contract address for the assets for which to show events
     * @param collectionSlug Limit responses to events from a collection.  Case sensitive and must match the collection slug exactly. Will return all assets from all contracts in a collection.  For more information on collections, see our [collections documentation](/reference#retrieving-collections).
     * @param collectionEditor 
     * @param accountAddress A user account's wallet address to filter for events on an account
     * @param eventType The event type to filter. Can be `created` for new auctions, `successful` for sales, `cancelled`, `bid_entered`, `bid_withdrawn`, `transfer`, `offer_entered`, or `approve`
     * @param auctionType Filter by an auction type. Can be `english` for English Auctions, `dutch` for fixed-price and declining-price sell orders (Dutch Auctions), or `min-price` for CryptoPunks bidding auctions.
     * @param occurredBefore Only show events listed before this timestamp. Seconds since the Unix epoch.
     * @param occurredAfter Only show events listed after this timestamp. Seconds since the Unix epoch.
     * @param cursor A cursor pointing to the page to retrieve
     * @returns any 200
     * @throws ApiError
     */
    public static retrievingAssetEvents(
        onlyOpensea?: boolean,
        tokenId?: number,
        assetContractAddress?: string,
        collectionSlug?: string,
        collectionEditor?: string,
        accountAddress?: string,
        eventType?: string,
        auctionType?: string,
        occurredBefore?: string,
        occurredAfter?: string,
        cursor?: string,
    ): CancelablePromise<{
        next?: string;
        previous?: any;
        asset_events?: Array<{
            approved_account?: any;
            asset?: {
                id?: number;
                num_sales?: number;
                background_color?: any;
                image_url?: string;
                image_preview_url?: string;
                image_thumbnail_url?: string;
                image_original_url?: string;
                animation_url?: any;
                animation_original_url?: any;
                name?: string;
                description?: string;
                external_link?: string;
                asset_contract?: {
                    address?: string;
                    asset_contract_type?: string;
                    created_date?: string;
                    name?: string;
                    nft_version?: string;
                    opensea_version?: any;
                    owner?: number;
                    schema_name?: string;
                    symbol?: string;
                    total_supply?: string;
                    description?: string;
                    external_link?: string;
                    image_url?: string;
                    default_to_fiat?: boolean;
                    dev_buyer_fee_basis_points?: number;
                    dev_seller_fee_basis_points?: number;
                    only_proxied_transfers?: boolean;
                    opensea_buyer_fee_basis_points?: number;
                    opensea_seller_fee_basis_points?: number;
                    buyer_fee_basis_points?: number;
                    seller_fee_basis_points?: number;
                    payout_address?: string;
                };
                permalink?: string;
                collection?: {
                    banner_image_url?: string;
                    chat_url?: any;
                    created_date?: string;
                    default_to_fiat?: boolean;
                    description?: string;
                    dev_buyer_fee_basis_points?: string;
                    dev_seller_fee_basis_points?: string;
                    discord_url?: string;
                    display_data?: {
                        card_display_style?: string;
                    };
                    external_url?: string;
                    featured?: boolean;
                    featured_image_url?: string;
                    hidden?: boolean;
                    safelist_request_status?: string;
                    image_url?: string;
                    is_subject_to_whitelist?: boolean;
                    large_image_url?: string;
                    medium_username?: any;
                    name?: string;
                    only_proxied_transfers?: boolean;
                    opensea_buyer_fee_basis_points?: string;
                    opensea_seller_fee_basis_points?: string;
                    payout_address?: string;
                    require_email?: boolean;
                    short_description?: any;
                    slug?: string;
                    telegram_url?: any;
                    twitter_username?: string;
                    instagram_username?: any;
                    wiki_url?: any;
                };
                decimals?: number;
                token_metadata?: string;
                owner?: {
                    user?: {
                        username?: string;
                    };
                    profile_img_url?: string;
                    address?: string;
                    config?: string;
                };
                token_id?: string;
            };
            asset_bundle?: any;
            auction_type?: any;
            bid_amount?: string;
            collection_slug?: string;
            contract_address?: string;
            created_date?: string;
            custom_event_name?: any;
            dev_fee_payment_event?: any;
            dev_seller_fee_basis_points?: number;
            duration?: any;
            ending_price?: any;
            event_type?: string;
            from_account?: {
                user?: {
                    username?: any;
                };
                profile_img_url?: string;
                address?: string;
                config?: string;
            };
            id?: number;
            is_private?: any;
            owner_account?: any;
            payment_token?: {
                id?: number;
                symbol?: string;
                address?: string;
                image_url?: string;
                name?: string;
                decimals?: number;
                eth_price?: string;
                usd_price?: string;
            };
            quantity?: string;
            seller?: any;
            starting_price?: any;
            to_account?: any;
            total_price?: any;
            transaction?: any;
            winner_account?: any;
            listing_time?: any;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events',
            query: {
                'only_opensea': onlyOpensea,
                'token_id': tokenId,
                'asset_contract_address': assetContractAddress,
                'collection_slug': collectionSlug,
                'collection_editor': collectionEditor,
                'account_address': accountAddress,
                'event_type': eventType,
                'auction_type': auctionType,
                'occurred_before': occurredBefore,
                'occurred_after': occurredAfter,
                'cursor': cursor,
            },
            errors: {
                400: `400`,
            },
        });
    }

    /**
     * Retrieve bundles
     * @param onSale If set to `true`, only show bundles currently on sale. If set to `false`, only show bundles that have been sold or cancelled.
     * @param owner Account address of the owner of a bundle (and all assets within)
     * @param assetContractAddress Contract address of all the assets in a bundle. Only works for homogenous bundles, not mixed ones.
     * @param assetContractAddresses An array of contract addresses to search for (e.g. `?asset_contract_addresses=0x1...&asset_contract_addresses=0x2...`). Will return a list of bundles with assets having contracts that match ALL of the addresses in this array. Useful for querying for mixed bundles, e.g. ones with CryptoKitties AND CK Talisman statues.
     * @param tokenIds A list of token IDs for showing only bundles with at least one of the token IDs in the list
     * @param limit For pagination: how many results to return
     * @param offset For pagination: the index of the result to start at (beginning with 0)
     * @throws ApiError
     */
    public static retrievingBundles(
        onSale?: boolean,
        owner?: string,
        assetContractAddress?: string,
        assetContractAddresses?: string,
        tokenIds?: string,
        limit: string = '20',
        offset: string = '0',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bundles',
            query: {
                'on_sale': onSale,
                'owner': owner,
                'asset_contract_address': assetContractAddress,
                'asset_contract_addresses': assetContractAddresses,
                'token_ids': tokenIds,
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * Retrieve a contract
     * @param xApiKey Your API Key (contact us to request one!)
     * @param assetContractAddress Address of the contract
     * @throws ApiError
     */
    public static retrievingASingleContract(
        xApiKey?: string,
        assetContractAddress: string = '0x06012c8cf97bead5deae237070f9587f8e7a266d',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/asset_contract/{asset_contract_address}',
            path: {
                'asset_contract_address': assetContractAddress,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * Retrieve collections
     * @param assetOwner A wallet address. If specified, will return collections where the owner owns at least one asset belonging to smart contracts in the collection. The number of assets the account owns is shown as `owned_asset_count` for each collection.
     * @param offset For pagination. Number of contracts offset from the beginning of the result list.
     * @param limit For pagination. Maximum number of contracts to return.
     * @param xApiKey Your optional API Key (contact us to request one!)
     * @returns any 200
     * @throws ApiError
     */
    public static retrievingCollections(
        assetOwner?: string,
        offset?: number,
        limit: number = 300,
        xApiKey?: string,
    ): CancelablePromise<{
        collection?: Array<{
            banner_image_url?: string;
            chat_url?: any;
            created_date?: string;
            default_to_fiat?: boolean;
            description?: string;
            dev_buyer_fee_basis_points?: string;
            dev_seller_fee_basis_points?: string;
            discord_url?: string;
            display_data?: {
                card_display_style?: string;
            };
            external_url?: string;
            featured?: boolean;
            featured_image_url?: string;
            hidden?: boolean;
            image_url?: string;
            instagram_username?: string;
            is_subject_to_whitelist?: boolean;
            large_image_url?: string;
            medium_username?: any;
            name?: string;
            only_proxied_transfers?: boolean;
            opensea_buyer_fee_basis_points?: string;
            opensea_seller_fee_basis_points?: string;
            owned_asset_count?: number;
            payout_address?: string;
            primary_asset_contracts?: Array<{
                address?: string;
                asset_contract_type?: string;
                buyer_fee_basis_points?: number;
                created_date?: string;
                default_to_fiat?: boolean;
                description?: string;
                dev_buyer_fee_basis_points?: number;
                dev_seller_fee_basis_points?: number;
                external_link?: string;
                image_url?: string;
                name?: string;
                nft_version?: any;
                only_proxied_transfers?: boolean;
                opensea_buyer_fee_basis_points?: number;
                opensea_seller_fee_basis_points?: number;
                opensea_version?: any;
                owner?: number;
                payout_address?: string;
                schema_name?: string;
                seller_fee_basis_points?: number;
                symbol?: string;
                total_supply?: any;
            }>;
            require_email?: boolean;
            safelist_request_status?: string;
            short_description?: any;
            slug?: string;
            stats?: {
                average_price?: number;
                count?: number;
                floor_price?: number;
                market_cap?: number;
                num_owners?: number;
                num_reports?: number;
                one_day_average_price?: number;
                one_day_change?: number;
                one_day_sales?: number;
                one_day_volume?: number;
                seven_day_average_price?: number;
                seven_day_change?: number;
                seven_day_sales?: number;
                seven_day_volume?: number;
                thirty_day_average_price?: number;
                thirty_day_change?: number;
                thirty_day_sales?: number;
                thirty_day_volume?: number;
                total_sales?: number;
                total_supply?: number;
                total_volume?: number;
            };
            telegram_url?: any;
            traits?: any;
            twitter_username?: string;
            wiki_url?: any;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collections',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'asset_owner': assetOwner,
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * Retrieve a collection
     * @param xApiKey Your optional API Key (contact us to request one!)
     * @param collectionSlug The collection slug of this collection that is used to uniquely link to this collection on OpenSea
     * @throws ApiError
     */
    public static retrievingASingleCollection(
        xApiKey?: string,
        collectionSlug: string = 'doodles-official',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collection/{collection_slug}',
            path: {
                'collection_slug': collectionSlug,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * Retrieve collection stats
     * @param xApiKey Your optional API Key (contact us to request one!)
     * @param collectionSlug The collection slug
     * @returns any 200
     * @throws ApiError
     */
    public static retrievingCollectionStats(
        xApiKey?: string,
        collectionSlug: string = 'doodles-official',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collection/{collection_slug}/stats',
            path: {
                'collection_slug': collectionSlug,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * Validate an asset
     * @param assetContractAddress Address of the contract for this NFT
     * @param tokenId Token ID for this item
     * @param xApiKey 
     * @param validate Adding the validate string
     * @param requestBody 
     * @returns any 200
     * @throws ApiError
     */
    public static validateAssets(
        assetContractAddress: string = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        tokenId: string = '1',
        xApiKey?: string,
        validate: string = 'validate',
        requestBody?: any,
    ): CancelablePromise<{
        listings?: Array<{
            created_date?: string;
            closing_date?: string;
            closing_extendable?: boolean;
            expiration_time?: number;
            listing_time?: number;
            order_hash?: string;
            metadata?: {
                asset?: {
                    id?: string;
                    address?: string;
                };
                schema?: string;
            };
            exchange?: string;
            maker?: {
                user?: {
                    username?: string;
                };
                profile_img_url?: string;
                address?: string;
                config?: string;
            };
            taker?: {
                user?: {
                    username?: string;
                };
                profile_img_url?: string;
                address?: string;
                config?: string;
            };
            current_price?: string;
            current_bounty?: string;
            bounty_multiple?: string;
            maker_relayer_fee?: string;
            taker_relayer_fee?: string;
            maker_protocol_fee?: string;
            taker_protocol_fee?: string;
            maker_referrer_fee?: string;
            fee_recipient?: {
                user?: {
                    username?: any;
                };
                profile_img_url?: string;
                address?: string;
                config?: string;
            };
            fee_method?: number;
            side?: number;
            sale_kind?: number;
            target?: string;
            how_to_call?: number;
            calldata?: string;
            replacement_pattern?: string;
            static_target?: string;
            static_extradata?: string;
            payment_token?: string;
            payment_token_contract?: {
                id?: number;
                symbol?: string;
                address?: string;
                image_url?: string;
                name?: any;
                decimals?: number;
                eth_price?: string;
                usd_price?: string;
            };
            base_price?: string;
            extra?: string;
            quantity?: string;
            salt?: string;
            'v'?: number;
            'r'?: string;
            's'?: string;
            approved_on_chain?: boolean;
            cancelled?: boolean;
            finalized?: boolean;
            marked_invalid?: boolean;
            prefixed_hash?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/asset/{asset_contract_address}/{token_id}/validate',
            path: {
                'asset_contract_address': assetContractAddress,
                'token_id': tokenId,
                'validate': validate,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }

}