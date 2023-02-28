import { FolderModel } from "../model/folder.model";

export const createFolder= async (req:any, res:any) => {
    const parentFolderId = req.body.parentFolderId ?? null;
    const folder = await FolderModel.create({
      name: req.body.name,
      parentFolder: parentFolderId,
    });
  
    if (parentFolderId !== null) {
      const parentFolder: any = await FolderModel.findById(parentFolderId);
      parentFolder.children.push(folder._id);
      await parentFolder.save();
    }
  
    res.json(folder);
  }

export const getAllFolder=async (req: any, res: any) => {
    const folders = await FolderModel.find().populate('children');
    res.json(folders.filter((folder) => folder.parentFolder === null));
  }


export const deleteFolder=async (req:any, res:any) => {
    const folderId = req.params.id;
    const folder:any = await FolderModel.findById(folderId);
  
    if (folder.parentFolder !== null) {
      const parentFolder:any = await FolderModel.findById(folder.parentFolder);
      parentFolder.children = parentFolder.children.filter((child:any) => child.toString() !== folderId);
      await parentFolder.save();
    }
  
    await folder.delete();
  
    res.json({ message: 'Folder deleted successfully' });
  }
