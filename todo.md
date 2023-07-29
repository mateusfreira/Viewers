# Todo
- [x]  1. create extention in separated repo
- [x]  2. install it as a file
- [x]  3. replace it with the simbol link
- [x]  4. test it
- [x]  5. start coding the nun-db integration

## Create Nun-db OHIF database

```bash
export DB_NAME="features-ohif-db"
export DB_PWD="feature-ohif-pwd"
nun-db --user $NUN_USER  -p $NUN_PWD --host "https://https.nundb.org" exec "create-db $DB_NAME $DB_PWD;"
# Create server user with full permission to all keys
nun-db --user $NUN_USER  -p $NUN_PWD --host "https://https.nundb.org" exec "use-db $DB_NAME $DB_PWD; create-user server server-$DB_PWD; set-permissions server rwx *;"
# Create client user with read permission to all keys
nun-db --user $NUN_USER  -p $NUN_PWD --host "https://https.nundb.org" exec "use-db $DB_NAME $DB_PWD; create-user client client-pwd; set-permissions client r *featureToggle rwx client-*;"
```


## Nun-db
- [x]  Connect OHIF to nun-db
- [ ]  Enable feature Flag on OHIF
- [ ]  Enable open mode real time sync
- [ ]  Enable stack stream in Nun-db
- [ ]  Real time hanging protocol sync
		[k ]
