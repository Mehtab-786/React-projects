import { Client, Storage, ID, Query, TablesDB } from "appwrite";
import conf from '../conf/conf.js'

class StorageService {
    client = new Client();
    storage;
    tables;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteId)
            .setProject(conf.appwriteProjectId)
        this.storage = new Storage(this.client)
        this.tables = new TablesDB(this.client)
    };

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.tables.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug, // what will be the unique value of this post 
                data: { title, content, featuredImage, status, userId }
            })
        } catch (error) {
            console.error("Create Post :: Error :: ", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tables.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: { title, content, featuredImage, status }
            })
        } catch (error) {
            console.error('Error :: Update Post :: ', error)
        }
    }

    async deletePost(slug) {
        try {
            return await this.tables.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            console.error('Delete Post ::: Error :: ', error)
        }
    }

    async getPost(slug) {
        try {
            return await this.tables.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            console.log('Error :: get post :: ', error)
        }
    }

    async getAllPosts() {
        try {
            return await this.tables.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries: [
                    Query.equal('status', 'active')
                ]
            })
        } catch (error) {
            console.log('Error :: get post :: ', error)
        }
    }



    async uploadfile(file) {
        try {
            await this.storage.createFile({
                bucketId: conf.appwriteBucketId,
                file: ID.unique(),
                fileId: file
            })
        } catch (error) {
            console.log('Error :: create file :: ', error)
        }
    }

    async deleteFile(file) {
        try {
            return await this.storage.deleteFile({
                bucketId: conf.appwriteCollectionId,
                fileId: file
            })
        } catch (error) {
            console.log('error :: Delete file ', error)
        }
    }

    async getFilePreview(fileId) {
        return this.storage.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId
        })
    }
};

const storageservice = new StorageService()
export default storageservice;