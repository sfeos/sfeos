using System;
using System.Collections.Generic;
using System.Text;

namespace Sfeos.Data
{
    public static class LocalConfig
    {
		/// If you are working on the app and need a connectionstring please contact chadrickm@legacygameworks.com and
		/// we will set up a unique username/password for you to use in your local test environment. Use the following
		/// git command to make sure you do not upload your personal connectionstring to the repository.
		/// 
		/// git update-index --assume-unchanged Data/LocalConfig.cs
		/// 
		/// If you do need to upload the connectionstring (you shouldn't need to) you can use the following command
		/// to have git recognize the changes again.
		/// 
		/// git update-index --no-assume-unchanged Data/LocalConfig.cs
		public static string ConnectionString = "ReplaceWithConnectionString";
	}
}
