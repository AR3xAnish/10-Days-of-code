import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client);
        thid.bucket = new Storage(this.client)

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)
        }
    }

    async updatePost(slug ,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID
            )  
        } catch (error) {
             console.log("Appwrite service::createPost::error",error)

        }
    }    
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)

        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service::createPost::error",error)
            return false
        }
    }

    //async use nhi cuz yeh promise retrun nhi kra par fast bhi he
    getFilepreview(fileId){
        return this.bucket.getFilepreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}


const service = new Service()
export default service