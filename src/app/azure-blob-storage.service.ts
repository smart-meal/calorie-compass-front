import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {

  accountName = "caloriecompass"
  containerName = "meals"

  constructor() { }

  public uploadImage(sas: string, content: Blob, name: string, handler: () => void) {
    const blockBlobClient = this.containerClient(sas).getBlockBlobClient(name);
    blockBlobClient
      .uploadData(content, {blobHTTPHeaders: {blobContentType: content.type}})
      .then(() => handler())
  }

  private containerClient(sas?: string): ContainerClient {
    let token = ""
    if(sas){
      token = sas;
    }

    return new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net?${token}`)
                .getContainerClient(this.containerName)
  }
}
